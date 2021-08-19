const images = {
    bookshop: ['main.PNG', 'bookshop_big.jpg', 'book_description.jpg', 'cart.jpg', 'order_form.jpg', 'orders_history.jpg'],
    dintorni: ['main.jpg','raccolte.jpg', 'authors.jpg','categories.jpg', 'article.jpg'],
    js_quiz: ['main.jpg', 'sample_1.jpg', 'sample_2.jpg', 'sample_3.jpg', 'styles.jpg'],
    mondo_pane: ['main.jpg', 'pane.jpg', 'farine_main.jpg', 'farine.jpg', 'farine_small.jpg'],
    simply_eat: ['main.jpg', 'menu.jpg'],
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
                console.log(ind)
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
