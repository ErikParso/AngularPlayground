using Microsoft.AspNetCore.Mvc;
using PlaygroundServer.Model;
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

        [HttpPost]
        public IActionResult AddNewStudent(Student student)
            => Ok(_studentsService.AddNewStudent(student));

        [HttpPut]
        public IActionResult UpdateStudent(Student student)
        {
            _studentsService.UpdateStudent(student);
            return Ok();
        }
    }
}