using System;
using System.Collections.Generic;
using System.Linq;
using PlaygroundServer.Model;

namespace PlaygroundServer.Services
{
    public class StudentsService
    {
        private int _currentId = 0;
        private readonly List<Student> _students;

        public StudentsService()
        {
            _students = InitializeStudents();
        }

        public IEnumerable<Student> GetStudents()
            => _students.AsReadOnly();

        public Student AddNewStudent(Student student)
        {
            student.Id = _currentId ++;
            _students.Add(student);
            return student;
        }

        public void UpdateStudent(Student student)
        {
            var remove = _students.FirstOrDefault(s => s.Id == student.Id);
            if(remove == null)
                throw new Exception($"Student with id {student.Id} was not found.");
            _students.Remove(remove);
            _students.Add(student);
        }

        private List<Student> InitializeStudents()
            => new List<Student>() {
                new Student()
                {
                    Id = _currentId ++,
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
                    Id = _currentId ++,
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