using Microsoft.AspNetCore.Mvc;
using PlaygroundServer.Services;

namespace PlaygroundServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : Controller
    {    
        private readonly StudentsService _studentsService;

        public StudentsController(StudentsService studentsService)
        {
            _studentsService = studentsService;
        }

        [HttpGet]
        public IActionResult GetAllStudents()
            => Ok(_studentsService.GetStudents());
    }
}