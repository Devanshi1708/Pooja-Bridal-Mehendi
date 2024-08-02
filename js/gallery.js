document.addEventListener("DOMContentLoaded", function() {
    const galleries = {
        "sider": {
            images: [
                "img/sider/1.png", "img/sider/2.jpeg", "img/sider/3.jpg",
                "img/sider/4.jpg", "img/sider/5.jpg",  "img/sider/8.jpg", 
                "img/sider/9.jpg", "img/sider/10.jpg", "img/sider/11.jpg", 
                "img/sider/12.jpg", "img/sider/13.jpg", "img/sider/14.jpg", 
                "img/sider/15.jpg", "img/sider/16.jpg", "img/sider/17.jpg", 
                "img/sider/18.jpg", "img/sider/19.jpg", "img/sider/20.jpg", 
                "img/sider/21.jpg", "img/sider/22.jpg", "img/sider/23.jpg", 
                "img/sider/24.jpg", "img/sider/25.jpg", "img/sider/26.jpg", 
                "img/sider/27.jpg", "img/sider/28.jpg", "img/sider/29.jpg", 
                "img/sider/30.jpg", "img/sider/31.jpg", "img/sider/32.jpg", 
                "img/sider/33.jpg", "img/sider/34.jpg", "img/sider/35.jpg", 
                "img/sider/36.jpg", "img/sider/37.jpg", "img/sider/38.jpg", 
                "img/sider/39.jpg", "img/sider/40.jpg", "img/sider/41.jpg", 
                "img/sider/42.jpg", "img/sider/43.jpg", "img/sider/44.jpg", 
                "img/sider/45.jpg", "img/sider/46.jpg", "img/sider/47.jpg", 
                "img/sider/48.jpg", "img/sider/49.jpg", "img/sider/50.jpg", 
                "img/sider/51.jpg", "img/sider/52.jpg", "img/sider/53.jpg", 
                "img/sider/54.jpg", "img/sider/55.jpg", "img/sider/56.jpg", 
                "img/sider/57.jpg", "img/sider/58.jpeg", "img/sider/59.jpg", 
                "img/sider/60.jpg", "img/sider/61.jpg", "img/sider/62.jpg", 
                "img/sider/63.jpg", "img/sider/64.jpg", "img/sider/65.jpg",
            ],
            currentPage: 1,
            itemsPerPage: 15
        },
        "babyshower": {
            images: [
                "img/Baby_Shower/1.jpg", "img/Baby_Shower/2.jpg", "img/Baby_Shower/3.jpg",
                "img/Baby_Shower/4.jpg", "img/Baby_Shower/5.jpg", "img/Baby_Shower/6.jpg",
                "img/Baby_Shower/7.jpg", "img/Baby_Shower/8.jpg", "img/Baby_Shower/9.jpg",
                "img/Baby_Shower/10.jpg", "img/Baby_Shower/11.jpg", "img/Baby_Shower/12.jpg",
                "img/Baby_Shower/13.jpg", "img/Baby_Shower/14.jpg", "img/Baby_Shower/15.jpg",
                "img/Baby_Shower/16.jpg", "img/Baby_Shower/17.jpg", "img/Baby_Shower/18.jpg",
                "img/Baby_Shower/19.jpg", "img/Baby_Shower/20.jpg", "img/Baby_Shower/21.jpg",
                "img/Baby_Shower/22.jpg", "img/Baby_Shower/23.jpg", "img/Baby_Shower/24.jpg",
                "img/Baby_Shower/25.jpg", "img/Baby_Shower/26.jpg", "img/Baby_Shower/27.jpg",
                "img/Baby_Shower/28.jpg", "img/Baby_Shower/29.jpg",
            ],
            currentPage: 1,
            itemsPerPage: 15
        },
        "bridal": {
            images: [
                "img/Bridal/1.jpg", "img/Bridal/2.jpg", "img/Bridal/3.jpg", 
                "img/Bridal/4.jpg", "img/Bridal/5.jpg", "img/Bridal/6.jpg", 
                "img/Bridal/7.jpg", "img/Bridal/8.jpg", "img/Bridal/9.jpg", 
                "img/Bridal/10.jpg", "img/Bridal/11.jpg", "img/Bridal/12.jpg",
                "img/Bridal/13.jpg", "img/Bridal/14.jpg", "img/Bridal/15.jpg",
                "img/Bridal/16.jpg", "img/Bridal/17.jpg", "img/Bridal/18.jpg",
                "img/Bridal/19.jpg", "img/Bridal/20.jpg", "img/Bridal/21.jpg",
                "img/Bridal/22.jpg", "img/Bridal/23.jpg", "img/Bridal/24.jpg",
                "img/Bridal/25.jpg", "img/Bridal/26.jpg", "img/Bridal/27.jpg",
                "img/Bridal/28.jpg", "img/Bridal/29.jpg", "img/Bridal/30.jpg",
                "img/Bridal/31.jpg", "img/Bridal/32.jpg", "img/Bridal/33.jpg",
                "img/Bridal/34.jpg", "img/Bridal/35.jpg", "img/Bridal/36.jpg",
                "img/Bridal/37.jpg", "img/Bridal/38.jpg", "img/Bridal/39.jpg",
                "img/Bridal/40.jpg", "img/Bridal/41.jpg", "img/Bridal/42.jpg",
                "img/Bridal/43.jpg", "img/Bridal/44.jpg", "img/Bridal/45.jpg",
                "img/Bridal/46.jpg", "img/Bridal/47.jpg", "img/Bridal/48.jpg",
                "img/Bridal/49.png", "img/Bridal/50.jpg", "img/Bridal/51.jpg",
                "img/Bridal/52.jpg", "img/Bridal/53.png", "img/Bridal/54.png",
                "img/Bridal/55.jpg", "img/Bridal/56.jpg", "img/Bridal/57.jpg",
                "img/Bridal/58.jpg", "img/Bridal/59.jpg", "img/Bridal/60.jpg",
                "img/Bridal/61.jpg", "img/Bridal/62.jpg", "img/Bridal/63.jpg",
                "img/Bridal/64.jpg", "img/Bridal/65.jpg", "img/Bridal/66.jpg",
                "img/Bridal/67.jpg", "img/Bridal/68.jpg", "img/Bridal/69.jpg",
                "img/Bridal/70.jpg", "img/Bridal/71.jpg", "img/Bridal/72.jpg",
                "img/Bridal/73.jpg", "img/Bridal/74.jpg", "img/Bridal/75.jpg",
                "img/Bridal/76.jpg", "img/Bridal/77.jpg", "img/Bridal/78.jpg",
                "img/Bridal/79.jpg", "img/Bridal/80.jpg", "img/Bridal/81.jpg",
                "img/Bridal/82.jpg", "img/Bridal/83.jpg", "img/Bridal/84.jpg",
                "img/Bridal/85.jpg", "img/Bridal/86.jpg", "img/Bridal/87.jpg",
                "img/Bridal/88.jpg", "img/Bridal/89.jpg", "img/Bridal/90.jpg",
                "img/Bridal/91.jpg", "img/Bridal/92.jpg", "img/Bridal/93.jpg",
                "img/Bridal/95.jpg", "img/Bridal/96.jpg", "img/Bridal/97.jpg", 
                "img/Bridal/98.jpg", "img/Bridal/99.jpg", "img/Bridal/100.jpg", 
                "img/Bridal/101.png", "img/Bridal/102.jpg", "img/Bridal/103.jpg", 
                "img/Bridal/104.jpg", "img/Bridal/105.jpg", "img/Bridal/106.jpg", 
                "img/Bridal/107.jpg", "img/Bridal/108.jpg", "img/Bridal/109.jpg", 
                "img/Bridal/110.jpg", "img/Bridal/111.jpg", "img/Bridal/112.jpg", 
                "img/Bridal/113.jpg", "img/Bridal/114.jpg", "img/Bridal/115.jpg", 
                "img/Bridal/116.jpg", "img/Bridal/117.jpg", "img/Bridal/118.jpg", 
                "img/Bridal/119.jpg", "img/Bridal/120.jpg", "img/Bridal/121.jpg", 
                "img/Bridal/122.jpg", "img/Bridal/123.jpg", "img/Bridal/124.jpg", 
                "img/Bridal/125.jpg", "img/Bridal/126.jpg", "img/Bridal/127.jpg",
                "img/Bridal/128.jpg", "img/Bridal/129.jpg", "img/Bridal/130.jpg",
                "img/Bridal/131.jpg", "img/Bridal/132.jpg", "img/Bridal/133.jpg",
                "img/Bridal/134.jpg",
            ],
            currentPage: 1,
            itemsPerPage: 26
        },
    };

    function loadImages(section) {
        const gallery = document.getElementById(`gallery-${section}`);
        const loadMoreButton = document.getElementById(`loadMore-${section}`);
        const { images, currentPage, itemsPerPage } = galleries[section];
        const start = (currentPage - 1) * itemsPerPage;
        const end = Math.min(currentPage * itemsPerPage, images.length);
        const imagesToLoad = images.slice(start, end);

        imagesToLoad.forEach(src => {
            const item = document.createElement("div");
            item.className = "item";
            const img = document.createElement("img");
            img.src = src;
            img.loading = "lazy";
            item.appendChild(img);
            gallery.appendChild(item);
        });

        if (end >= images.length) {
            loadMoreButton.style.display = 'none';
        } else {
            loadMoreButton.style.display = 'block';
        }

        galleries[section].currentPage++;
    }

    Object.keys(galleries).forEach(section => {
        const loadMoreButton = document.getElementById(`loadMore-${section}`);
        loadMoreButton.addEventListener("click", () => loadImages(section));
        loadImages(section); // Initial load
    });
});
