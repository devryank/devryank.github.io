var scrollTop = $(window).scrollTop(),
    elementOffset = $('nav').offset().top,
    distance = (elementOffset - scrollTop);
function show_section(active, show, topNav) {
    if (show == 'top') {
        topNav = '';
        marginNav = -150;
    } else {
        marginNav = '';
    }
    if (!(active == show)) {
        $('#' + active).animate({
            opacity: 0,
        }, 800, function () {
            if (show == 'top') {
                $('nav').css('top', '');
                $('nav').css('margin-top', '0');
                $('nav').animate({
                    top: distance,
                }, 800, function () {
                    $('nav').css('top', '').css('margin-top', '-150px');
                    $('#' + active).removeClass('h-100');
                    $('#' + active + '>.container').remove();
                    $('#' + show).addClass('h-100');
                    show_top();
                })
            } else {
                if (active == 'top') {
                    $('nav').css('margin-top', '');
                    $('nav').animate({
                        top: topNav,
                        marginTop: 0,
                    }, 800, function () {
                        $('#' + active).removeClass('h-100');
                        $('#' + active + '>.container').remove();
                        $('#' + show).css('top', '50');
                        switch (show) {
                            case 'experience':
                                show_experience();
                                break;
                            case 'skills':
                                show_skills();
                                break;
                            case 'projects':
                                show_projects();
                                break;
                            default:
                                break;
                        }
                    })
                } else {
                    $('nav').css('top', '20');
                    $('#' + active).removeClass('h-100');
                    $('#' + active + '>.container').remove();
                    switch (show) {
                        case 'experience':
                            show_experience();
                            break;
                        case 'skills':
                            show_skills();
                            break;
                        case 'projects':
                            show_projects();
                            break;
                        default:
                            break;
                    }
                }
            }
        })
    }
}
function show_top() {
    $('#top').html(`<div class="container h-100">
        <div class="card col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 py-5 mx-auto text-center"
                id="profile">
            <img src="assets/img/ryan-kurniawan-min.png"
                    alt="Ryan Kurniawan devryank"
                    class="rounded-circle mx-auto">
            <h2 class="mt-5">Ryan Kurniawan</h2>
            <h4><span class="highlight">Enthusiastic </span><b>Full-Stack Developer</b></h4>
            <div class="touch-me">
                <a href="https://web.facebook.com/devryank" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="https://github.com/devryank" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                <a href="https://instagram.com/devryank" target="_blank"><i class="fab fa-instagram fa-2x"></i></i></a>
                <a href="https://www.linkedin.com/in/ryan-kurniawan-204127173" target="_blank"><i class="fab fa-linkedin fa-2x"></i></i></a>
            </div>
        </div>
    </div>`).animate({
        opacity: 100,
    }, 800)
}

function show_experience() {
    $('#experience').html(`<div class="container">
    <div class="col-12">
        <h1 class="text-center">EXPERIENCE</h1>
            <div class="timeline">
                <h2 class="timeline__item timeline__item--year">2017</h2>

                <div class="timeline__item">
                    <h3 class="timeline__title">3rd place at LKS Wilayah Jakarta Selatan 1</h3>
                    <small>November</small>
                    <p class="timeline__blurb">Built a tourism blog with PHP Native and Mysql</p>
                </div>

                <h2 class="timeline__item timeline__item--year">2018</h2>

                <div class="timeline__item">
                    <h3 class="timeline__title">Web Programmer Internship at Pusat Penilaian Pendidikan</h3>
                    <small>February - May </small>
                    <p class="timeline__blurb">inputting interactive exam simulations for elementary to high
                        school with HTML, CSS, and Javascript
                    </p>
                </div>

                <h2 class="timeline__item timeline__item--year">2019</h2>
                <div class="timeline__item">
                    <h3 class="timeline__title">6th place at Edutech Coding Competition</h3>
                    <small>February</small>
                    <p class="timeline__blurb">built a student information system that monitors student grades
                        for a year with Codeigniter 3
                    </p>
                </div>
                <div class="timeline__item">
                    <h3 class="timeline__title">Web Programmer at Pusat Asesmen dan Pembelajaran</h3>
                    <small>April 2019 - October 2020</small>
                    <p class="timeline__blurb">inputting interactive exam simulations for elementary to high
                        school with HTML, CSS, and Javascript
                    </p>
                </div>
                <div class="timeline__item">
                    <h3 class="timeline__title">Informatics Student at Indraprasta PGRI University</h3>
                    <small>September 2019 - August 2023</small>
                </div>
                <h2 class="timeline__item timeline__item--year">2022</h2>
                <div class="timeline__item">
                    <h3 class="timeline__title">Frontend Developer</h3>
                    <small>April 2022 - January 2023</small>
                    <p class="timeline__blurb">Created a website for Department of Education, Youth and Sports for Anambas District using Nuxt JS together with <a href="https://portfolio-rahmat.vercel.app">Rahmat Afriyadi</a> on Backend which has many modules such as student, teacher and educational staff management, vaccination report, attendance, graduation, mail between schools, etc.
                    </p>
                </div>
                <h2 class="timeline__item timeline__item--year">2023</h2>
                <div class="timeline__item">
                    <h3 class="timeline__title">Quality Assurance Intern at Bumitama Gunajaya Agro</h3>
                    <small>February - June</small>
                    <p class="timeline__blurb">Creating scenarios and testing internal applications that are being developed.
                    </p>
                </div>
                <div class="timeline__item">
                    <h3 class="timeline__title">Quality Assurance at Bumitama Gunajaya Agro</h3>
                    <small>June - December</small>
                    <p class="timeline__blurb">Ensured the quality and reliability of web and desktop applications through rigorous testing and performance optimization. Conducted manual testing, identified and resolved defects, and collaborated with development teams to enhance software quality.
                    </p>
                </div>
                <h2 class="timeline__item timeline__item--year">2024</h2>
                <div class="timeline__item">
                    <h3 class="timeline__title">Fullstack Developer at Bumitama Gunajaya Agro</h3>
                    <small>January - Now</small>
                    <p class="timeline__blurb">Developed and maintained internal web, desktop applications, and windows service with Vue.js, .NET, SQL Server, and MySQL.
                    </p>
                </div>
            </div>
        </div>
    </div>`).animate({
        opacity: 100,
    }, 800)
}

function show_skills() {
    $('#skills').html(`<div class="container">
    <div class="col-lg-12">
    <h1 class="text-center">SKILLS</h1>
    </div>
    <div class="row">
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/html.png"
                         alt="HTML"
                         width="100px"
                         class="mx-auto">
                </div>
                <h5>HTML</h5>
                <p><b>5 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/css.png"
                         alt="CSS"
                         width="100px"
                         class="mx-auto">
                </div>
                <h5>CSS</h5>
                <p><b>5 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/bootstrap.png"
                         alt="bootstrap"
                         width="100px">
                </div>
                <h5>Bootstrap</h5>
                <p><b>4 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/materialize.png"
                         alt="materializecss"
                         width="100px">
                </div>
                <h5>Materialize</h5>
                <p><b>2 months</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/tailwind.png"
                         alt="tailwindcss"
                         width="100px">
                </div>
                <h5>Tailwindcss</h5>
                <p><b>2 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/c-crash.png"
                         alt="C#"
                         width="100px">
                </div>
                <h5>C#</h5>
                <p><b>1 year</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/net.png"
                         alt=".NET"
                         width="100px">
                </div>
                <h5>.NET</h5>
                <p><b>1 year</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/js.png"
                         alt="javascript"
                         width="100px">
                </div>
                <h5>Javascript</h5>
                <p><b>3 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/jquery.png"
                         alt="Jquery"
                         width="100px">
                </div>
                <h5>Jquery</h5>
                <p><b>2 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/vue.png"
                         alt="vue"
                         width="100px">
                </div>
                <h5>VueJS</h5>
                <p><b>1 year </b>of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/nuxtjs.png"
                         alt="NuxtJS"
                         width="100px">
                </div>
                <h5>NuxtJS</h5>
                <p><b>1 year</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/php.png"
                         alt="PHP"
                         width="100px">
                </div>
                <h5>PHP</h5>
                <p><b>4 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/mysql.png"
                         alt="Mysql"
                         width="100px">
                </div>
                <h5>Mysql</h5>
                <p><b>3 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/sqlserver.png"
                         alt="Mysql"
                         width="100px">
                </div>
                <h5>SQL Server</h5>
                <p><b>1 year</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/codeigniter.png"
                         alt="Codeigniter"
                         width="100px">
                </div>
                <h5>Codeigniter</h5>
                <p><b>2 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/laravel.png"
                         alt="Laravel"
                         width="100px">
                </div>
                <h5>Laravel</h5>
                <p><b>1 year</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/wordpress.png"
                         alt="Wordpress"
                         width="100px">
                </div>
                <h5>Wordpress</h5>
                <p><b>11 months</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/git.png"
                         alt="git"
                         width="100px">
                </div>
                <h5>Git</h5>
                <p><b>4 year</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/lunacy.png"
                         alt="Lunacy"
                         width="100px">
                </div>
                <h5>Lunacy</h5>
                <p><b>8 months</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/photoshop.png"
                         alt="Photoshop"
                         width="100px">
                </div>
                <h5>Photoshop</h5>
                <p><b>3 years</b> of experience</p>
            </div>
        </div>
    </div>
</div>`).animate({
        opacity: 100,
    }, 800)
}

function show_projects() {
    $('#projects').html(`<div class="container">
    <div class="col-lg-12">
        <h1 class="text-center">PROJECTS</h1>
    </div>
    <div class="row">
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/wisudapolimedia.png"
                        alt="Polimedia Graduation Bundling Package"
                        class="mx-auto">
                </div>
                <h5>Polimedia Graduation Bundling Package</h5>
                <p>Website for purchasing bundling packages such as photobooth, spin 360, and toga for graduates of the Politeknik Negeri Media Kreatif
                </p>
                <div class="card-footer px-2">
                    <span class="tech">Laravel 9</span>
                    <span class="tech">NuxtJS</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/SKM.png"
                        alt="Public Satisfaction Survey"
                        class="mx-auto">
                </div>
                <h5>Public Satisfaction Survey for Department of Education, Youth and Sports</h5>
                <p>Website for Public Satisfaction Survey about services provided by regional apparatus, sub-districts, and health for Anambas District
                </p>
                <div class="card-footer px-2">
                    <span class="tech">Laravel</span>
                    <span class="tech">NuxtJS</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/pustaka.png"
                        alt="Library Website"
                        class="mx-auto">
                </div>
                <h5>Library Management System</h5>
                <p>Library website for Anambas Regional Library using Laravel 9 and Nuxt JS.</p>
                <div class="card-footer px-2">
                    <span class="tech">Laravel 9</span>
                    <span class="tech">NuxtJS</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/disdik.png"
                        alt="Department of Education, Youth and Sports"
                        class="mx-auto">
                </div>
                <h5>Department of Education, Youth and Sports</h5>
                <p>Website for the Anambas Regency using Laravel 9 and Nuxt JS. Manage thousands of students, teachers, and other education personnel data</p>
                <div class="card-footer px-2">
                    <span class="tech">Laravel 9</span>
                    <span class="tech">NuxtJS</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/simrs.png"
                        alt="Sistem Informasi Rumah Sakit"
                        class="mx-auto">
                </div>
                <h5>Hospital Information System</h5>
                <p>Web Application to support the delivery of health services</p>
                <div class="card-footer px-2">
                    <span class="tech">Laravel 9</span>
                    <span class="tech">NuxtJS</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/waarungg-olshop.png"
                        alt="Waarungg E-commerce"
                        class="mx-auto">
                </div>
                <h5>Waarungg E-commerce</h5>
                <p>Website E-commerce integrated with Tripay, Rajaongkir, and Kodepos Indonesia</p>
                <div class="card-footer px-2">
                    <span class="tech">Lumen 8</span>
                    <span class="tech">NuxtJS</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/ciresto.png"
                         alt="Ciresto"
                         class="mx-auto">
                </div>
                <h5>Restaurant Management System</h5>
                <p>Restaurant management that can manage from admin to waiter.</p>
                <div class="card-footer px-2">
                    <span class="tech">Codeigniter 3</span>
                    <span class="tech">JQuery</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/cispk.png"
                         alt="CISPK"
                         class="mx-auto">
                </div>
                <h5>Decision Support System with SAW Method</h5>
                <p>DSS that can be for various case, e.g., selection employees.
                </p>
                <div class="card-footer">
                    <span class="tech">Codeigniter 4</span>
                    <span class="tech">JQuery</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/laratour.png"
                         alt="Laratour"
                         class="mx-auto">
                </div>
                <h5>Wisataku</h5>
                <p>Travel vlog website and user can request a place to visit and give a donation to guide.
                </p>
                <div class="card-footer">
                    <span class="tech">Laravel 6</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/olcourse.png"
                         alt="OLCourse"
                         class="mx-auto">
                </div>
                <h5>Online Course</h5>
                <p>Online learning website.
                </p>
                <div class="card-footer">
                    <span class="tech">Codeigniter 4</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/ruangnostalgia.png"
                         alt="Ruangnostalgia"
                         class="mx-auto">
                </div>
                <h5>Ruang Nostalgia</h5>
                <p>Reunion website of all generation.
                </p>
                <div class="card-footer">
                    <span class="tech">Codeigniter 3</span>
                    <span class="tech">JQuery</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mt-4">
            <div class="card px-2">
                <div class="img-area">
                    <img src="assets/img/projects/statdas.png"
                         alt="Ruangnostalgia"
                         class="mx-auto">
                </div>
                <h5>Basic Statistics of Group Data</h5>
                <p>Website for sorting and calculating statistical group data .
                </p>
                <div class="card-footer">
                    <span class="tech">PHP Native</span>
                </div>
            </div>
        </div>
    </div>
</div>`).animate({
        opacity: 100,
    }, 800)
}

$('li.top').on('click', function () {
    let active = $('.container').parent().attr('id');
    show_section(active, 'top', -150);
});

$('li.experience').on('click', function () {
    let active = $('.container').parent().attr('id');
    show_section(active, 'experience', 20);
});

$('li.skills').on('click', function () {
    let active = $('.container').parent().attr('id');
    show_section(active, 'skills', 20);
});

$('li.projects').on('click', function () {
    let active = $('.container').parent().attr('id');
    show_section(active, 'projects', 20);
});
