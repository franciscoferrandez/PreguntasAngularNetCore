using Backend.Domain.IRepositories;
using Backend.Domain.Models;
using Backend.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Persistence.Repositories
{
    public class LoginRepository: ILoginRepository
    {
        private readonly ApplicationDBContext _context;
        public LoginRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Usuario> ValidateUser(Usuario usuario)
        {
            var user = await _context.Usuario.Where(x => x.UserName == usuario.UserName && x.Password == usuario.Password).FirstOrDefaultAsync();
            return user;
        }
    }
}
