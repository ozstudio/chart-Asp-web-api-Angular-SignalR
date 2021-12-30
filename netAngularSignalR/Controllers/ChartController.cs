using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using netAngularSignalR.DataStorage;
using netAngularSignalR.HubFolder;
using netAngularSignalR.TimerFeatures;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace netAngularSignalR.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class ChartController : ControllerBase
    {
       private readonly IHubContext<ChartHub> _hub;

        public ChartController(IHubContext<ChartHub> hub)
        {
            _hub = hub;
        }

        public IActionResult Get()
        {
            if (UserHandler.ConnectedIds.Count >=1)
            {

            }
            else
            {
                var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync("trasferserverdata", DataManager.GetData()));

            }

            return Ok("ok");
           
        }




    }
}
