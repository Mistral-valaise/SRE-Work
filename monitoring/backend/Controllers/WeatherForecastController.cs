using Microsoft.AspNetCore.Mvc;

namespace BookStoreApi.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }


    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpGet("time")]
    public ActionResult<string> City()
    {
        Thread.Sleep(TimeSpan.FromSeconds(7));
        return "Berlin";
    }

    [HttpGet("error")]
    public ActionResult<string> Error()
    {
        Thread.Sleep(TimeSpan.FromSeconds(1));
        throw new Exception();
    }

    [HttpGet("test500")]
    public ActionResult<string> Test500()
    {
        Thread.Sleep(TimeSpan.FromSeconds(1));
        return StatusCode(StatusCodes.Status500InternalServerError);
    }

    [HttpGet("test501")]
    public ActionResult<string> Test501()
    {
        Thread.Sleep(TimeSpan.FromSeconds(1));
        return StatusCode(StatusCodes.Status501NotImplemented);
    }

    [HttpGet("test502")]
    public ActionResult<string> Test502()
    {
        Thread.Sleep(TimeSpan.FromSeconds(1));
        return StatusCode(StatusCodes.Status502BadGateway);
    }

    [HttpGet("test503")]
    public ActionResult<string> Test503()
    {
        Thread.Sleep(TimeSpan.FromSeconds(1));
        return StatusCode(StatusCodes.Status503ServiceUnavailable);
    }

    [HttpGet("test504")]
    public ActionResult<string> Test504()
    {
        Thread.Sleep(TimeSpan.FromSeconds(1));
        return StatusCode(StatusCodes.Status504GatewayTimeout);
    }
    
    [HttpGet("country")]
    public ActionResult<string> Country()
    {
        var rng = new Random().Next(1, 10);

        if (rng > 5)
        {
            return Unauthorized();
        }
        return "Kamerun";
    }


}

