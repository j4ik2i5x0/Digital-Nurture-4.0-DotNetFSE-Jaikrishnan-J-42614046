using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyFirstWebAPI.Models;
using System.Collections.Generic;

namespace MyFirstWebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "Admin")]
public class EmployeeController : ControllerBase
{
    private static readonly List<Employee> Emps = new()
    {
        new Employee { Id = 1, Name = "Alice", Salary = 60000 }
    };

    [HttpGet]
    public ActionResult<List<Employee>> Get() => Ok(Emps);
}
