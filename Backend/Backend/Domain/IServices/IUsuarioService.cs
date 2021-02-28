﻿using Backend.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Domain.IServices
{
    public interface IUsuarioService
    {
        Task SaveUser(Usuario usuario);
        Task<bool> ValidateExistence(Usuario usuario);
    }
}
