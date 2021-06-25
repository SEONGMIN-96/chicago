from django.db import models
import warnings
warnings.filterwarnings('ignore')
from poy.common.models import FileDTO, Printer, Reader, Scraper
import pandas as pd
import pandas_datareader.data as web
import numpy as np
import matplotlib.pyplot as plt
#matplotlib inline
from icecream import ic

from fbprophet import Prophet
from datetime import datetime

from pandas_datareader import data
import yfinance as yf


class reader(object):

    file = FileDTO()
    print = Printer()
    read = Reader()
    scrap = Scraper()

    def csv(self):
        read = self.read
        file = self.file

        file.context = './data/'
        file.fname = '08. PinkWink Web Traffic'
        df = read.csv_header(file, None)
        df.columns = ['date', 'hit']
        df = df[df['hit'].notnull()]
        #ic(df.head())

        fig0 = df['hit'].plot(figsize=(12, 4), grid=True)
        #fig0.show()

        return df

    @staticmethod
    def error(f, x, y):
        return np.sqrt(np.mean((f(x) - y) ** 2))

    def figure(self):
        df = self.csv()

        time = np.arange(0, len(df))
        traffic = df['hit'].values
        fx = np.linspace(0, time[-1], 1000)

        fp1 = np.polyfit(time, traffic, 1)
        f1 = np.poly1d(fp1)

        f2p = np.polyfit(time, traffic, 2)
        f2 = np.poly1d(f2p)

        f3p = np.polyfit(time, traffic, 3)
        f3 = np.poly1d(f3p)

        f15p = np.polyfit(time, traffic, 15)
        f15 = np.poly1d(f15p)

        ic(self.error(f1, time, traffic))
        ic(self.error(f2, time, traffic))
        ic(self.error(f3, time, traffic))
        ic(self.error(f15, time, traffic))

        plt.figure(figsize=(10, 6))
        plt.scatter(time, traffic, s=10)

        plt.plot(fx, f1(fx), lw=4, label='f1')
        plt.plot(fx, f2(fx), lw=4, label='f2')
        plt.plot(fx, f3(fx), lw=4, label='f3')
        plt.plot(fx, f15(fx), lw=4, label='f15')

        plt.grid(True, linestyle='-', color='0.75')

        plt.legend(loc=2)
        plt.show()

    def forecast(self):
        df = self.csv()

        df.rename(columns={'date':'ds', 'hit':'y'}, inplace=True)
        #ic(df)

        df['ds'] = pd.to_datetime(df['ds'], format="%y. %m. %d.")
        #ic(df)

        m = Prophet(yearly_seasonality=True, daily_seasonality=True)
        m.fit(df)

        future = m.make_future_dataframe(periods=60)
        #future.tail()

        forecast = m.predict(future)
        #forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail()

        fig1 = m.plot(forecast);
        #fig1.show()

        fig2 = m.plot_components(forecast);
        #fig2.show()

    def sesonal(self):
        yf.pdr_override()

        start_date = '1990-1-1'
        end_date = '2017-6-30'
        KIA = data.get_data_yahoo('000270.KS', start_date, end_date)

        #ic(KIA.head())

        KIA['Close'].plot(figsize=(12, 6), grid=True);
        #plt.show()

        KIA_trunc = KIA[:'2016-12-31']
        #ic(KIA_trunc)

        df = pd.DataFrame({'ds': KIA_trunc.index, 'y': KIA_trunc['Close']})
        df.reset_index(inplace=True)
        del df['Date']
        #ic(df.head())

        m = Prophet(daily_seasonality=True)
        m.fit(df);

        future = m.make_future_dataframe(periods=365)
        #ic(future.tail())

        forecast = m.predict(future)
        #forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail()

        fig3 = m.plot(forecast);
        #fig3.show()

        fig4 = m.plot_components(forecast);
        #fig4.show()

        start_date = '2014-1-1'
        end_date = '2017-7-31'
        KIA = data.get_data_yahoo('000270.KS', start_date, end_date)
        KIA['Close'].plot(figsize=(12, 6), grid=True);

        KIA_trunc = KIA[:'2017-05-31']
        KIA_trunc['Close'].plot(figsize=(12, 6), grid=True);

        df = pd.DataFrame({'ds': KIA_trunc.index, 'y': KIA_trunc['Close']})
        df.reset_index(inplace=True)
        del df['Date']

        m = Prophet(daily_seasonality=True)
        m.fit(df);

        future = m.make_future_dataframe(periods=61)
        #future.tail()

        forecast = m.predict(future)
        fig5 = m.plot(forecast);
        #fig5.show()

        plt.figure(figsize=(12, 6))
        plt.plot(KIA.index, KIA['Close'], label='real')
        plt.plot(forecast['ds'], forecast['yhat'], label='forecast')
        plt.grid()
        plt.legend()
        plt.show()

    def growth_model(self):
        read = self.read
        file = self.file

        file.context = './data/'
        file.fname = '08. example_wp_R'
        df = read.csv(file, 0)
        df['y'] = np.log(df['y'])
        df['cap'] = 8.5

        m = Prophet(growth='logistic', daily_seasonality=True)
        m.fit(df)

        future = m.make_future_dataframe(periods=1826)
        future['cap'] = 8.5
        fcst = m.predict(future)
        fig6 = m.plot(fcst);
        #fig6.show()

        forecast = m.predict(future)
        fig7 = m.plot_components(forecast);
        #fig7.show()

    def holiday_forecast(self):
        read = self.read
        file = self.file

        file.context = './data/'
        file.fname = '08. example_wp_peyton_manning'
        df = read.csv(file, 0)

        df['y'] = np.log(df['y'])
        m = Prophet(daily_seasonality=True)
        m.fit(df)
        future = m.make_future_dataframe(periods=366)

        df.y.plot(figsize=(12, 6), grid=True);
        #plt.show()

        playoffs = pd.DataFrame({
            'holiday': 'playoff',
            'ds': pd.to_datetime(['2008-01-13', '2009-01-03', '2010-01-16',
                                  '2010-01-24', '2010-02-07', '2011-01-08',
                                  '2013-01-12', '2014-01-12', '2014-01-19',
                                  '2014-02-02', '2015-01-11', '2016-01-17',
                                  '2016-01-24', '2016-02-07']),
            'lower_window': 0,
            'upper_window': 1,
        })
        superbowls = pd.DataFrame({
            'holiday': 'superbowl',
            'ds': pd.to_datetime(['2010-02-07', '2014-02-02', '2016-02-07']),
            'lower_window': 0,
            'upper_window': 1,
        })
        holidays = pd.concat((playoffs, superbowls))

        m = Prophet(holidays=holidays, daily_seasonality=True)
        forecast = m.fit(df).predict(future)

        forecast[(forecast['playoff'] + forecast['superbowl']).abs() > 0][
            ['ds', 'playoff', 'superbowl']][-10:]

        fig8 = m.plot(forecast);
        #fig8.show()

        fig9 = m.plot_components(forecast);
        #fig9.show()


if __name__ == '__main__':
    r = reader()

    #r.csv()
    r.figure()
    #r.forecast()
    #r.sesonal()
    #r.growth_model()
    #r.holiday_forecast()