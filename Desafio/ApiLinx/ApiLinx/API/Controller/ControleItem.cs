using ApiLinx.API.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ApiLinx.API.Data;

namespace ApiLinx.API.Controller
{

    [ApiController]
    [Route("v1/Produto")]
    public class ControleItem :ControllerBase
    {
 
        [HttpGet]
        [Route("")]

        public async Task<ActionResult<List<ItemImportado>>> Get([FromServices] Data.DataContext context)
        {
            var produto = await context.Produtos.ToListAsync();
            return produto;
        }

        [HttpPost]
        [Route("")]

        public async Task<ActionResult<ItemImportado>> Post(
            [FromServices] DataContext context,
            [FromBody] ItemImportado model)
        {
            if (ModelState.IsValid)
            {
                context.Produtos.Add(model);
                await context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
