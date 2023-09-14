$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Coder", "Blogger" , "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Coder", "Blogger" , "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Function to show the snackbar
function showSnackbar() {
  const snackbar = document.getElementById("snackbar");
  snackbar.classList.add("show");
  setTimeout(function() {
    snackbar.classList.remove("show");
  }, 3000);
}

// Submit form event listener
const form = document.querySelector(".contact-content form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Show the snackbar
  showSnackbar();

  // Reset the form
  form.reset();
});



// const http = require('http');
// const url = require('url');
// const nodemailer = require('nodemailer');

// const server = http.createServer((req, res) => {
//   const { pathname, query } = url.parse(req.url, true);

//   if (req.method === 'POST' && pathname === '/contact') {
//     // Extract form data from the request
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });

//     req.on('end', () => {
//       const formData = new URLSearchParams(body);
//       const name = formData.get('name');
//       const email = formData.get('email');
//       const subject = formData.get('subject');
//       const message = formData.get('message');

//       // Validate form data
//       if (!name || !email || !subject || !message) {
//         res.statusCode = 400;
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify({ error: 'All fields are required' }));
//       } else {
//         // Create a transporter object using your email service credentials
//         const transporter = nodemailer.createTransport({
//           service: 'YourEmailService',
//           auth: {
//             user: 'your-email@example.com',
//             pass: 'your-email-password',
//           },
//         });

//         // Configure the email options
//         const mailOptions = {
//           from: 'your-email@example.com',
//           to: 'sumitagar2003@gmail.com', // Replace with the provided email ID
//           subject: subject,
//           text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
//         };

//         // Send the email
//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.log(error);
//             res.statusCode = 500;
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify({ error: 'Failed to send email' }));
//           } else {
//             console.log('Email sent:', info.response);
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify({ message: 'Email sent successfully' }));
//           }
//         });
//       }
//     });
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Not Found');
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
