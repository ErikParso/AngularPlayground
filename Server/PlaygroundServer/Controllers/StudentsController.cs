using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PlaygroundServer.Model;

namespace PlaygroundServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : Controller
    {    
        [HttpGet]
        public IActionResult GetAllStudents()
        {
            return Ok();
        }
    }
}