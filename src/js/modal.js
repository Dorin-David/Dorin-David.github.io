const images = {
    string_of_world: ['main.PNG', 'about.PNG', 'works.PNG'],
    bookshop: ['main.PNG', 'bookshop_big.JPG', 'book_description.JPG', 'cart.JPG', 'order_form.JPG', 'orders_history.JPG'],
    dintorni: ['main.JPG','raccolte.JPG', 'authors.JPG','categories.JPG', 'article.JPG'],
    js_quiz: ['main.JPG', 'sample_1.JPG', 'sample_2.JPG', 'review.JPG', 'styles.JPG', 'sample_3.JPG', ],
    codewars_database: ['user_card.JPG', 'katas.JPG', 'kata_info.JPG', 'user_card_2.JPG', 'kata_info2.JPG'],
    chess_database: ["main3.PNG", "loading.PNG", 'filter1.PNG', 'filter2.PNG', 'filter3.PNG']
}

const modalWrapper = document.querySelector('.modal-wrapper');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modalMainImage = document.querySelector('.modal-main-image img');
const modalGallery = document.querySelector('.modal-gallery');
const mainImageArrowSx = document.querySelector('.arrow-left');
const mainImageArrowDx = document.querySelector('.arrow-right');
const projectsImages = document.querySelectorAll('.work-main');

[...projectsImages].forEach(project => {
    const name = project.dataset.name;
    const galleryImages = images[name];
    const imagePath = project.dataset.imgPath;
    let index = 0;

    function moveImageForward() {
        if (index === galleryImages.length - 1) index = 0;
        else index++;
        modalMainImage.src = imagePath + galleryImages[index]
    }

    function moveImageBackwards() {
        if (index === 0) index = galleryImages.length - 1;
        else index--;
        modalMainImage.src = imagePath + galleryImages[index]
    }

    project.addEventListener('click', () => {
        modalGallery.innerHTML = '';
        modalWrapper.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        modalMainImage.src = imagePath + galleryImages[0];

        galleryImages.forEach((image, ind) => {
            const img = document.createElement('img');
            img.src = imagePath + image;
            img.addEventListener('click', () => {
                index = ind;
                modalMainImage.src = imagePath + image;
            })
            modalGallery.append(img)
        })

        mainImageArrowSx.addEventListener('click', moveImageBackwards)

        mainImageArrowDx.addEventListener('click', moveImageForward)

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') moveImageForward()
            else if (e.key === 'ArrowLeft') moveImageBackwards()
        })

    })
})

closeModalBtn.addEventListener('click', () => {
    modalWrapper.classList.add('hidden');
    document.body.style.overflow = '';
})
