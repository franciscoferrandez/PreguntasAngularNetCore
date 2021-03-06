using Backend.Domain.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class LoginService: ILoginService
    {
        private readonly ILoginService _loginService;
        public LoginService(ILoginService loginService)
        {
            _loginService = loginService;
        }
    }
}
