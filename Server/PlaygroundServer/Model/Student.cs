using System;
using System.Collections.Generic;

namespace PlaygroundServer.Model
{
    public class Student
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public DateTime BirthDay {get; set;}
        public IEnumerable<string> Notes {get; set;}
    }
}