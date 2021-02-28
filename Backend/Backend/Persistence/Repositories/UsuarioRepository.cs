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
    public class UsuarioRepository: IUsuarioRepository
    {
        private readonly ApplicationDBContext _context;
        public UsuarioRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task SaveUser(Usuario usuario)
        {
            _context.Add(usuario);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> ValidateExistence(Usuario usuario)
        {
            var validateExistence = await _context.Usuario.AnyAsync(x => x.UserName == usuario.UserName);
            return validateExistence;
        }

        public async Task<Usuario> ValidatePassword(int idUsuario, string password)
        {
            var usuario = await _context.Usuario.Where(x => x.Id == idUsuario && x.Password == password).FirstOrDefaultAsync();
            return usuario;
        }

        public async Task UpdatePassword(Usuario usuario)
        {
            _context.Update(usuario);
            await _context.SaveChangesAsync();
        }
    }
}
