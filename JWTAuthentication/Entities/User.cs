using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWTAuthentication.Entities
{

    //The user entity class represents the data for a user in the application.
    //Entity classes are used to pass data between different parts of the application (e.g. between services and controllers) 
    //and can be used to return http response data from controller action methods.


    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
    }
}
