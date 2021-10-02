using Diplom2.DataContext;
using Diplom2.Models;

using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Diplom2.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(User model)
        {
            if (ModelState.IsValid)
            {
                User user = null;
                using (StationDbContext db = new StationDbContext())
                {
                    user = db.UserList.FirstOrDefault(u => u.Email == model.Email && u.Password == model.Password);
                }
                if(user != null)
                {
                    FormsAuthentication.SetAuthCookie(model.Email, true);
                    return RedirectToAction("Index", "Stations");
                }
                else
                {
                    ModelState.AddModelError("", "Неверный логин или пароль админа!");
                }
            }
            
            return View(model);
        }

        [Authorize]
        [HttpGet]
        public ActionResult Logout()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Logout(string name)
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Account");
        }
    }
}