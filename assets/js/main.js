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
        <div class="card mx-auto text-center"
                id="profile">
            <img src="assets/img/ryan-kurniawan-min.png"
                    alt="Ryan Kurniawan devryank"
                    class="rounded-circle mx-auto">
            <h2>Ryan Kurniawan</h2>
            <h4><b>Full Stack Developer</b><br><span class="highlight">&amp; IT Business Analyst</span></h4>
            <div class="touch-me">
                <a href="https://web.facebook.com/devryank" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="https://github.com/devryank" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                <a href="https://instagram.com/devryank" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/ryan-kurniawan-204127173" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
            </div>
        </div>
    </div>`).animate({
        opacity: 100,
    }, 800)
}

function show_experience() {
    $('#experience').html(`<div class="container"><div class="col-12">
        <h1 class="text-center">EXPERIENCE</h1>
        <p class="text-center">Based in South Jakarta, Indonesia. 5+ years delivering enterprise web, desktop, and background-service applications, from requirements and solution design to production support.</p>
        <div class="timeline">
            <h2 class="timeline__item timeline__item--year">2026</h2>
            <div class="timeline__item">
                <h3 class="timeline__title">IT Business Analyst at Bumitama Gunajaya Agro</h3>
                <small>January 2026 - Present</small>
                <p class="timeline__blurb">Own enterprise application enhancements from requirements and solution analysis to HLD/FSD documentation, timeline planning, test scenarios, UAT, and production go-live. Led performance optimization of 26 enterprise reports to improve responsiveness and reduce database resource utilization. Supported solution design for supplier assessment, workforce validation, production recalculation, inventory integration, bulking sales, and mobile overtime management.</p>
                </div>
            <h2 class="timeline__item timeline__item--year">2024</h2>
            <div class="timeline__item">
                <h3 class="timeline__title">Full Stack Developer at Bumitama Gunajaya Agro</h3>
                <small>January 2024 - December 2025</small>
                <p class="timeline__blurb">Developed enterprise HRIS, plantation quality, and operational reporting modules. Resolved a critical legacy PHP payroll defect affecting base salary and incentives. Developed a scheduler in a .NET application to retrieve data from internal applications and send it to SAP EHP8. Implemented delta-based production recalculation to eliminate stock discrepancies during SAP reconciliation. Supported on-site pilot and production rollouts in Kalimantan.</p>
                </div>
            <h2 class="timeline__item timeline__item--year">2023</h2>
            <div class="timeline__item">
                <h3 class="timeline__title">Quality Assurance at Bumitama Gunajaya Agro</h3>
                <small>June 2023 - December 2023</small>
                <p class="timeline__blurb">Ensured the quality and reliability of web and desktop applications through accurate testing and performance optimization.</p>
                </div>
            <h2 class="timeline__item timeline__item--year">2021</h2>
            <div class="timeline__item">
                <h3 class="timeline__title">Junior Web Developer Certification</h3>
                <small>2021</small>
                <p class="timeline__blurb">Certified by the BPPTIK Professional Certification Institute.</p>
                </div>
            <div class="timeline__item">
                <h3 class="timeline__title">Operate and Manage Cloud Server on Alibaba Cloud VPS</h3>
                <small>2021</small>
                <p class="timeline__blurb">Completed a course on operating and managing cloud servers on Alibaba Cloud VPS.</p>
                </div>
            <h2 class="timeline__item timeline__item--year">2020</h2>
            <div class="timeline__item">
                <h3 class="timeline__title">Freelance Front-End Web Developer</h3>
                <small>October 2020 - December 2022</small>
                <p class="timeline__blurb">Built responsive interfaces and reusable components with Vue.js, Nuxt.js, Tailwind CSS, and Bootstrap. Integrated RESTful APIs and third-party services, and automated deployments with GitHub CI/CD pipelines and Vercel.</p>
                </div>
            <h2 class="timeline__item timeline__item--year">2019</h2>
            <div class="timeline__item">
                <h3 class="timeline__title">Bachelor of Computer Science at Universitas Indraprasta PGRI</h3>
                <small>September 2019 - September 2023</small>
                <p class="timeline__blurb">GPA: 3.58/4.00.</p>
                </div>
            <div class="timeline__item">
                <h3 class="timeline__title">Programmer at Pusat Asesmen dan Pembelajaran</h3>
                <small>April 2019 - September 2020</small>
                <p class="timeline__blurb">Digitized more than 1,000 exam questions in an internal application using Bootstrap and jQuery. Collaborated with teachers and lecturers to prepare educational assessments.</p>
                </div>
            <div class="timeline__item">
                <h3 class="timeline__title">6th Place, National Edutech Coding Competition</h3>
                <small>2019</small>
                <p class="timeline__blurb">Built a student information system to monitor yearly student grades using CodeIgniter 3.</p>
                </div>
            <h2 class="timeline__item timeline__item--year">2017</h2>
            <div class="timeline__item">
                <h3 class="timeline__title">3rd Place, Regional Web Design Competition</h3>
                <small>2017</small>
                <p class="timeline__blurb">Built a travel blog using PHP.</p>
                </div>
        </div>
    </div></div>`).animate({ opacity: 1 }, 800);
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
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/tailwind.png"
                         alt="tailwindcss"
                         width="100px">
                </div>
                <h5>Tailwind CSS</h5>
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
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/js.png"
                         alt="javascript"
                         width="100px">
                </div>
                <h5>JavaScript</h5>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/jquery.png"
                         alt="Jquery"
                         width="100px">
                </div>
                <h5>jQuery</h5>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/vue.png"
                         alt="vue"
                         width="100px">
                </div>
                <h5>Vue.js</h5>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/nuxtjs.png"
                         alt="NuxtJS"
                         width="100px">
                </div>
                <h5>Nuxt.js</h5>
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
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/mysql.png"
                         alt="Mysql"
                         width="100px">
                </div>
                <h5>MySQL</h5>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/sqlserver.png"
                         alt="SQL Server"
                         width="100px">
                </div>
                <h5>SQL Server</h5>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/codeigniter.png"
                         alt="Codeigniter"
                         width="100px">
                </div>
                <h5>CodeIgniter</h5>
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
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/wordpress.png"
                         alt="Wordpress"
                         width="100px">
                </div>
                <h5>WordPress</h5>
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
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/devexpress.png" alt="DevExpress" width="100px" class="mx-auto">
                </div>
                <h5>DevExpress</h5>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/github-cicd.png" alt="GitHub CI/CD" width="100px" class="mx-auto">
                </div>
                <h5>GitHub CI/CD</h5>
            </div>
        </div>
        <div class="col-6 col-lg-3 mt-4">
            <div class="card text-center pt-4 pb-3">
                <div class="img-area">
                    <img src="assets/img/skill/vercel.png" alt="Vercel" width="100px" class="mx-auto">
                </div>
                <h5>Vercel</h5>
            </div>
        </div>
    </div>
    <div class="mt-5 pb-4">
        <h2>Business Analysis &amp; Delivery</h2>
        <p>Requirements gathering, solution design, HLD/FSD documentation, timeline planning, UAT, go-live, and production support.</p>
        <p>SQL performance tuning, RESTful API integration, communication, time management, and teamwork.</p>
    </div>
</div>`).animate({
        opacity: 100,
    }, 800)
}

function show_projects() {
    $('#projects').html(`<div class="container">
    <div class="row"><div class="col-12 col-lg-4 mt-4"><div class="card p-3"><div class="img-area"><img src="assets/img/projects/Enterprise%20HRIS%20%26%20Operations.png" alt="Concept illustration for Enterprise HRIS &amp; Operations" class="mx-auto" loading="lazy"></div><h5>Enterprise HRIS &amp; Operations</h5><p>Developed employee transfer, promotion, demotion, data change, and termination modules, workforce quota reports, and plantation operational modules.</p><div class="card-footer px-2"><span class="tech">.NET</span></div></div></div><div class="col-12 col-lg-4 mt-4"><div class="card p-3"><div class="img-area"><img src="assets/img/projects/SAP%20Integration%20%26%20Reconciliation.png" alt="Concept illustration for SAP Integration &amp; Reconciliation" class="mx-auto" loading="lazy"></div><h5>SAP Integration &amp; Reconciliation</h5><p>Developed a scheduler in a .NET application to retrieve data from internal applications and send it to SAP EHP8. Implemented delta-based recalculation of FFB, CPO, and PK production to support reconciliation.</p><div class="card-footer px-2"><span class="tech">.NET</span></div></div></div><div class="col-12 col-lg-4 mt-4"><div class="card p-3"><div class="img-area"><img src="assets/img/projects/Enterprise%20Report%20Optimization.png" alt="Concept illustration for Enterprise Report Optimization" class="mx-auto" loading="lazy"></div><h5>Enterprise Report Optimization</h5><p>Led performance optimization of 26 reports by reviewing query execution, data scans, parallel execution, filtering scope, and load times.</p><div class="card-footer px-2"><span class="tech">SQL performance tuning</span></div></div></div>
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
                <p>2022: Website for the Anambas Regency Education, Youth, and Sports Office, built with Laravel 9 and Nuxt.js.</p>
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
                <p>2022: Hospital information system supporting health service delivery, built with Laravel 9 and Nuxt.js.</p>
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
                <p>2022: E-commerce application integrated with Tripay, RajaOngkir, and Indonesian postal codes.</p>
                <div class="card-footer px-2">
                    <span class="tech">Laravel 8</span>
                    <span class="tech">NuxtJS</span>
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
                <p>2020: Decision support system using the Simple Additive Weighting (SAW) method, built with CodeIgniter 4.
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
                    <img src="assets/img/projects/ruangnostalgia.png"
                         alt="Ruangnostalgia"
                         class="mx-auto">
                </div>
                <h5>Ruang Nostalgia</h5>
                <p>2021: Reunion website for all generations of Multimedia SMKN 41 Jakarta, with QR code-based attendance.
                </p>
                <div class="card-footer">
                    <span class="tech">Codeigniter 3</span>
                    <span class="tech">JQuery</span>
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
