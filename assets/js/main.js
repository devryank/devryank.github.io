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
                console.log(distance);
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
                        $('#' + show).css('top', '50')
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
            <img src="assets/img/pp.png"
                    alt=""
                    class="rounded-circle mx-auto">
            <h2 class="mt-5">Ryan Kurniawan</h2>
            <h4><span class="highlight">Enthusiastic</span> <b>Web Developer</b></h4>
            <div class="touch-me">
                <a href="https://web.facebook.com/devryank/"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="https:/github.com/devryank/"><i class="fab fa-github fa-2x"></i></a>
                <a href="https://instagram.com/devryank/"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/ryan-kurniawan-204127173/"><i
                        class="fab fa-linkedin fa-2x"></i></a>
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
                <h2 class="timeline__item timeline__item--year">2021</h2>
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
                <p><b>3 years</b> of experience</p>
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
                <p><b>3 years</b> of experience</p>
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
                <p><b>2 years</b> of experience</p>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/materialize.png"
                         alt="bootstrap"
                         width="100px">
                </div>
                <h5>Materialize</h5>
                <p><b>2 months</b> of experience</p>
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
                <p><b>2 years</b> of experience</p>
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
                <p><b>1 year</b> of experience</p>
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
                    <img src="assets/img/skill/php.png"
                         alt="PHP"
                         width="100px">
                </div>
                <h5>PHP</h5>
                <p><b>2 years</b> of experience</p>
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
                <p><b>2 years</b> of experience</p>
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
                <p><b>7 months</b> of experience</p>
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
                <p>Renion website of all generation.
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
                <h5>Statistika Dasar Data Kelompok</h5>
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
    console.log(active);
    show_section(active, 'top', -150);
})

$('li.experience').on('click', function () {
    let active = $('.container').parent().attr('id');
    console.log(active);
    show_section(active, 'experience', 20);
})

$('li.skills').on('click', function () {
    let active = $('.container').parent().attr('id');
    console.log(active);
    show_section(active, 'skills', 20);
})

$('li.projects').on('click', function () {
    let active = $('.container').parent().attr('id');
    console.log(active);
    show_section(active, 'projects', 20);
})