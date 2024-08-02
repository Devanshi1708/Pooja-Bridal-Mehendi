document.addEventListener("DOMContentLoaded", function() {
    const galleries = {
        "sider": {
            images: [
                "sider/1.png", "sider/2.jpeg", "sider/3.jpg",
                "sider/4.jpg", "sider/5.jpg",  "sider/8.jpg", 
                "sider/9.jpg", "sider/10.jpg", "sider/11.jpg", 
                "sider/12.jpg", "sider/13.jpg", "sider/14.jpg", 
                "sider/15.jpg", "sider/16.jpg", "sider/17.jpg", 
                "sider/18.jpg", "sider/19.jpg", "sider/20.jpg", 
                "sider/21.jpg", "sider/22.jpg", "sider/23.jpg", 
                "sider/24.jpg", "sider/25.jpg", "sider/26.jpg", 
                "sider/27.jpg", "sider/28.jpg", "sider/29.jpg", 
                "sider/30.jpg", "sider/31.jpg", "sider/32.jpg", 
                "sider/33.jpg", "sider/34.jpg", "sider/35.jpg", 
                "sider/36.jpg", "sider/37.jpg", "sider/38.jpg", 
                "sider/39.jpg", "sider/40.jpg", "sider/41.jpg", 
                "sider/42.jpg", "sider/43.jpg", "sider/44.jpg", 
                "sider/45.jpg", "sider/46.jpg", "sider/47.jpg", 
                "sider/48.jpg", "sider/49.jpg", "sider/50.jpg", 
                "sider/51.jpg", "sider/52.jpg", "sider/53.jpg", 
                "sider/54.jpg", "sider/55.jpg", "sider/56.jpg", 
                "sider/57.jpg", "sider/58.jpeg", "sider/59.jpg", 
                "sider/60.jpg", "sider/61.jpg", "sider/62.jpg", 
                "sider/63.jpg", "sider/64.jpg", "sider/65.jpg",
            ],
            currentPage: 1,
            itemsPerPage: 15
        },
        "babyshower": {
            images: [
                 "Baby_Shower/1.jpg", "Baby_Shower/2.jpg", "Baby_Shower/3.jpg",
                "Baby_Shower/4.jpg", "Baby_Shower/5.jpg", "Baby_Shower/6.jpg",
                "Baby_Shower/7.jpg", "Baby_Shower/8.jpg", "Baby_Shower/9.jpg",
                "Baby_Shower/10.jpg", "Baby_Shower/11.jpg", "Baby_Shower/12.jpg",
                "Baby_Shower/13.jpg", "Baby_Shower/14.jpg", "Baby_Shower/15.jpg",
                "Baby_Shower/16.jpg", "Baby_Shower/17.jpg", "Baby_Shower/18.jpg",
                "Baby_Shower/19.jpg", "Baby_Shower/20.jpg", "Baby_Shower/21.jpg",
                "Baby_Shower/22.jpg", "Baby_Shower/23.jpg", "Baby_Shower/24.jpg",
                "Baby_Shower/25.jpg", "Baby_Shower/26.jpg", "Baby_Shower/27.jpg",
                "Baby_Shower/28.jpg", "Baby_Shower/29.jpg",
            ],
            currentPage: 1,
            itemsPerPage: 15
        },
        "bridal": {
            images: [
                 "Bridal/1.jpg", "Bridal/2.jpg", "Bridal/3.jpg", 
                "Bridal/4.jpg", "Bridal/5.jpg", "Bridal/6.jpg", 
                "Bridal/7.jpg", "Bridal/8.jpg", "Bridal/9.jpg", 
                "Bridal/10.jpg", "Bridal/11.jpg", "Bridal/12.jpg",
                "Bridal/13.jpg", "Bridal/14.jpg", "Bridal/15.jpg",
                "Bridal/16.jpg", "Bridal/17.jpg", "Bridal/18.jpg",
                "Bridal/19.jpg", "Bridal/20.jpg", "Bridal/21.jpg",
                "Bridal/22.jpg", "Bridal/23.jpg", "Bridal/24.jpg",
                "Bridal/25.jpg", "Bridal/26.jpg", "Bridal/27.jpg",
                "Bridal/28.jpg", "Bridal/29.jpg", "Bridal/30.jpg",
                "Bridal/31.jpg", "Bridal/32.jpg", "Bridal/33.jpg",
                "Bridal/34.jpg", "Bridal/35.jpg", "Bridal/36.jpg",
                "Bridal/37.jpg", "Bridal/38.jpg", "Bridal/39.jpg",
                "Bridal/40.jpg", "Bridal/41.jpg", "Bridal/42.jpg",
                "Bridal/43.jpg", "Bridal/44.jpg", "Bridal/45.jpg",
                "Bridal/46.jpg", "Bridal/47.jpg", "Bridal/48.jpg",
                "Bridal/49.png", "Bridal/50.jpg", "Bridal/51.jpg",
                "Bridal/52.jpg", "Bridal/53.png", "Bridal/54.png",
                "Bridal/55.jpg", "Bridal/56.jpg", "Bridal/57.jpg",
                "Bridal/58.jpg", "Bridal/59.jpg", "Bridal/60.jpg",
                "Bridal/61.jpg", "Bridal/62.jpg", "Bridal/63.jpg",
                "Bridal/64.jpg", "Bridal/65.jpg", "Bridal/66.jpg",
                "Bridal/67.jpg", "Bridal/68.jpg", "Bridal/69.jpg",
                "Bridal/70.jpg", "Bridal/71.jpg", "Bridal/72.jpg",
                "Bridal/73.jpg", "Bridal/74.jpg", "Bridal/75.jpg",
                "Bridal/76.jpg", "Bridal/77.jpg", "Bridal/78.jpg",
                "Bridal/79.jpg", "Bridal/80.jpg", "Bridal/81.jpg",
                "Bridal/82.jpg", "Bridal/83.jpg", "Bridal/84.jpg",
                "Bridal/85.jpg", "Bridal/86.jpg", "Bridal/87.jpg",
                "Bridal/88.jpg", "Bridal/89.jpg", "Bridal/90.jpg",
                "Bridal/91.jpg", "Bridal/92.jpg", "Bridal/93.jpg",
                "Bridal/95.jpg", "Bridal/96.jpg", "Bridal/97.jpg", 
                "Bridal/98.jpg",  "Bridal2/100.jpg", 
                "Bridal2/101.png", "Bridal2/102.jpg", "Bridal2/103.jpg", 
                "Bridal2/104.jpg", "Bridal2/105.jpg", "Bridal2/106.jpg", 
                "Bridal2/107.jpg", "Bridal2/108.jpg", "Bridal2/109.jpg", 
                "Bridal2/110.jpg", "Bridal2/111.jpg", "Bridal2/112.jpg", 
                "Bridal2/113.jpg", "Bridal2/114.jpg", "Bridal2/115.jpg", 
                "Bridal2/116.jpg", "Bridal2/117.jpg", "Bridal2/118.jpg", 
                "Bridal2/119.jpg", "Bridal2/120.jpg", "Bridal2/121.jpg", 
                "Bridal2/122.jpg", "Bridal2/123.jpg", "Bridal2/124.jpg", 
                "Bridal2/125.jpg", "Bridal2/126.jpg", "Bridal2/127.jpg",
                "Bridal2/128.jpg", "Bridal2/129.jpg", "Bridal2/130.jpg",
                "Bridal2/131.jpg", "Bridal2/132.jpg", "Bridal2/133.jpg",
                "Bridal2/134.jpg",
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
