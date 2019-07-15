using System;
using System.Collections.Generic;
using PlaygroundServer.Model;

namespace PlaygroundServer.Services
{
    public class StudentsService
    {
        private readonly List<Student> _students;

        public StudentsService()
        {
            _students = InitializeStudents();
        }

        public IEnumerable<Student> GetStudents()
            => _students.AsReadOnly();

        private List<Student> InitializeStudents()
            => new List<Student>() {
                new Student()
                {
                    Id = 0,
                    Name = "Erik Parso",
                    BirthDay = DateTime.Now.AddYears(-24),
                    Notes = new List<string>()
                    {
                        "Angular",
                        "ASP.NET core",
                        "Xamarin.Forms",
                        "Material"
                    }
                },
                new Student()
                {
                    Id = 0,
                    Name = "Patrik Kruzelak",
                    BirthDay = DateTime.Now.AddYears(-26),
                    Notes = new List<string>()
                    {
                        "Angular JS",
                        "ASP.NET core",
                        ".NET, C#",
                        "JavaScript"
                    }
                }
            };
    }
}