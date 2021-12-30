using System;
using System.Threading;
using Microsoft.AspNetCore.SignalR;
using netAngularSignalR.HubFolder;

namespace netAngularSignalR.TimerFeatures
{
    public class TimerManager
    {
        private Timer timer;
        private AutoResetEvent AutoResetEvent;
        
        private Action _action;

        public DateTime timerStarted { get; set; }

        public TimerManager(Action action)
        {
            _action = action;
            
            AutoResetEvent = new AutoResetEvent(false);
            timer = new Timer(Execute, AutoResetEvent, 1000, 2000);
            timerStarted = DateTime.Now;



        }

        private void Execute(object state)
        {
            
            _action();
            
            System.Diagnostics.Debug.WriteLine(UserHandler.ConnectedIds.Count);
            if (UserHandler.ConnectedIds.Count == 0)
            {
                timer.Dispose();
                System.Diagnostics.Debug.WriteLine("timer stopped");

            }
           // if ((DateTime.Now - timerStarted).Seconds > 60 )
           // {
             //   timer.Dispose();

           // }
        }
    }
}
