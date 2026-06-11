$(document).ready(function () {

    /* =====================================
   APE KAMA FLOATING SPICES
===================================== */

const spices = [

    "images/spices/cinnamon.png",

    "images/spices/cardamom.png",

    "images/spices/star-anise.png",

    "images/spices/curry-leaf.png",

    "images/spices/chili.png",

    "images/spices/Roselle.png",

    "images/spices/onion R.png",

    "images/spices/Tumeric.png",

    "images/spices/sweet peppers.png",
    
    "images/spices/green Onion.png",

    "images/spices/garlic.png",

    "images/spices/black-pepperr.png"

];

const spiceCanvas =
document.getElementById(
    "spice-parallax-canvas"
);

if(spiceCanvas){

    const spiceCount = 30;

    for(let i = 0; i < spiceCount; i++){

        const spice =
        document.createElement("div");

        spice.classList.add(
            "spice-particle-node"
        );

        const img =
document.createElement("img");

img.src =
spices[
    Math.floor(
        Math.random() *
        spices.length
    )
];

img.alt = "Spice";

spice.appendChild(img);

        spice.style.left =
            Math.random() * 100 + "%";

        spice.style.top =
            Math.random() * 100 + "%";

        const size =
30 + Math.random() * 60;

spice.style.width =
size + "px";

        spice.style.animationDuration =
            (6 + Math.random()*8)
            + "s";

        spice.style.animationDelay =
            Math.random()*5 + "s";

            spice.style.opacity =
(3 + Math.random()*5);

        spiceCanvas.appendChild(spice);
    }

}

    // --- 2. Fixed Nav Engine (Hide on Down Scroll / Show on Up Scroll) ---
    let precedingScrollTop = 0;
    const mainNavbar = $('#dynamic-navbar');

    $(window).on('scroll', function () {
        const activeScrollTop = $(this).scrollTop();
        if (activeScrollTop > precedingScrollTop && activeScrollTop > 120) {
            mainNavbar.addClass('navbar-hidden-state'); // Scroll down rule hiding execution
        } else {
            mainNavbar.removeClass('navbar-hidden-state'); // Scroll up rule revealing execution
        }
        precedingScrollTop = activeScrollTop;
    });

    // --- 3. Main Interactive Matrix Configuration Population ---
    const mainCardGridContainer = $('#main-cards-injection-grid');
    APE_KAMA_DATASET.mainInteractiveCards.forEach(item => {
        const cardStructureNode = `
    <div class="component-food-card structural-main-trigger" data-item-id="${item.id}">
        <div class="card-visual-frame" style="padding:0; overflow:hidden;">
            <img src="${item.mainImage}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover; display:block;">
        </div>
        <div class="card-details-box">
            <h3>${item.name}</h3>
            ...
                    <div class="card-rendering-price">Rs. ${item.minPrice} – Rs. ${item.maxPrice}</div>
                    <p class="card-rendering-desc">${item.description}</p>
                </div>
            </div>
        `;
        mainCardGridContainer.append(cardStructureNode);
    });

    // --- 4. Special Popup Modal Infinite Slider Mechanisms ---
    let modalCarouselTimer = null;
    const modalShellNode = $('#interactive-popup-modal-shell');
    const modalTrackNode = $('#modal-subcards-injection-track');
    const modalDetailsNode = $('#modal-static-details-panel');

    $(document).on('click', '.structural-main-trigger', function () {
        const targetID = $(this).attr('data-item-id');
        const schema = APE_KAMA_DATASET.mainInteractiveCards.find(m => m.id === targetID);

        if (!schema) return;

        // Clear ongoing animation variables
        clearInterval(modalCarouselTimer);
        modalTrackNode.empty().css('transform', 'translateX(0px)');

        // Map static panel context information sheet view
        modalDetailsNode.html(`
            <h3>${schema.name}</h3>
            <div class="modal-price-range">Rs. ${schema.minPrice} to Rs. ${schema.maxPrice}</div>
            <p class="modal-main-desc">${schema.description} Explore our authentic, artisan hand-crafted flavor selections below.</p>
        `);

        // Populate left-hand gray frame track layer (Double array setup for infinite loop replication)
        const duplicateSubCards = [...schema.subCards, ...schema.subCards, ...schema.subCards];
        duplicateSubCards.forEach(sub => {
            const subCardStructureNode = `
    <div class="popup-sub-card-component">
        <div class="sub-media-mock" style="padding:0; overflow:hidden;">
            <img src="${sub.subImage}" alt="${sub.name}" style="width:100%; height:100%; object-fit:cover; display:block;">
        </div>
        <h4>${sub.name}</h4>
        ...
                    <div class="sub-price">${sub.price}</div>
                    <p class="sub-desc">${sub.desc}</p>
                    <a href="#order-section" class="btn btn-pill btn-orange-filled internal-modal-intercept-btn">Order Now</a>
                </div>
            `;
            modalTrackNode.append(subCardStructureNode);
        });

        // Open modal workflow wrapper action
        modalShellNode.addClass('modal-state-open');

        // Infinite Loop Animation Control (Sub-cards move left, pause when two cards reach center)
        let structuralStepValue = 0;
        const individualCardWidth = 280; // 250px width + 30px margins
        
        function transitionModalTrack() {
            modalCarouselTimer = setInterval(function () {
                structuralStepValue -= 2; // Moves incrementally to the left
                modalTrackNode.css('transform', `translateX(${structuralStepValue}px)`);

                // Check point: When exactly two elements loop completely through center field bounds
                if (Math.abs(structuralStepValue) % (individualCardWidth * 2) === 0 && structuralStepValue !== 0) {
                    clearInterval(modalCarouselTimer); // Trigger local pause mapping
                    
                    // Pause for 1.8 seconds, then safely resume tracking execution loops
                    setTimeout(function () {
                        if (modalShellNode.hasClass('modal-state-open')) {
                            transitionModalTrack();
                        }
                    }, 1800);
                }

                // Infinite boundary resets logic checking track width offsets
                if (Math.abs(structuralStepValue) >= (individualCardWidth * schema.subCards.length)) {
                    structuralStepValue = 0;
                    modalTrackNode.css('transform', `translateX(0px)`);
                }
            }, 25);
        }

        // Delay execution initiation slightly to coordinate with dark overlay slide transformations
        setTimeout(transitionModalTrack, 400);
    });

    // Dismiss popup operational bindings
    $('#dismiss-modal-trigger, #interactive-popup-modal-shell').on('click', function (e) {
        if (e.target === this || $(e.target).attr('id') === 'dismiss-modal-trigger') {
            modalShellNode.removeClass('modal-state-open');
            clearInterval(modalCarouselTimer);
        }
    });

    $(document).on('click', '.internal-modal-intercept-btn', function () {
        modalShellNode.removeClass('modal-state-open');
        clearInterval(modalCarouselTimer);
    });

    // --- 5. Magic Menu Population & Filtration Engine ---
    const flatMenuGridContainer = $('#magic-menu-injection-grid');

    function executeMenuFiltering(categoryKey = "all", matchQuery = "") {
        flatMenuGridContainer.empty();

        // Accumulate sub-cards directly into the magic menu layout pool
        // Accumulate sub-cards directly into the magic menu layout pool with dynamic category filtering
        // Accumulate sub-cards directly into the magic menu layout pool with smart fallback category tagging
        let compilationMasterPool = [];
        APE_KAMA_DATASET.mainInteractiveCards.forEach(main => {
            main.subCards.forEach(sub => {
                // We create an array containing any items we explicitly want to display in the Favourites tab
                const favoriteItemNames = [
                    "tandoori chicken bamboo rice", 
                    "garlic corn", 
                    "rulang pittu", 
                    "wattalappam"
                ];

                // Check if the current sub-card's name is included in our favorites list
                let itemCategory = "food";
                if (favoriteItemNames.includes(sub.name.toLowerCase().trim())) {
                    itemCategory = "favourites";
                }

                compilationMasterPool.push({ 
                    category: itemCategory, 
                    name: sub.name, 
                    price: sub.price, 
                    desc: sub.desc, 
                    menuImage: sub.subImage || sub.image // Checks both potential image property naming variations
                });
            });
        });
        
        // Merge with native single item category records
        let outputTotalPool = compilationMasterPool.concat(APE_KAMA_DATASET.flatMagicMenu);

        outputTotalPool.forEach(item => {
            if (categoryKey !== "all" && item.category !== categoryKey) return;
            if (matchQuery && !item.name.toLowerCase().includes(matchQuery.toLowerCase())) return;

            const flatItemCardNode = `
    <div class="component-food-card">
        <!-- Dynamic Image Frame for Magic Menu / House Favourites -->
        <div class="card-visual-frame" style="padding:0; overflow:hidden;">
            <img src="${item.menuImage || 'images/menu/fallback-dish.jpg'}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover; display:block;">
        </div>
        <div class="card-details-box">
            <h3>${item.name}</h3>
            <div class="card-rendering-price">${item.price.includes('Rs.') ? item.price : 'Rs. ' + item.price}</div>
            <p class="card-rendering-desc">${item.desc}</p>
            <a href="#order-section" class="btn btn-pill btn-orange-filled" style="width: 100%; text-align: center;">Order Now</a>
        </div>
    </div>
`;
            flatMenuGridContainer.append(flatItemCardNode);
        });
    }

    // Interactive Control State Bindings
    $('.tab-pill-btn').on('click', function () {
        $('.tab-pill-btn').removeClass('active-tab');
        $(this).addClass('active-tab');
        executeMenuFiltering($(this).attr('data-target-filter'), $('#menu-live-search-field').val());
    });

    $('#menu-live-search-field, #navbar-search-input').on('input', function () {
        const standardVal = $(this).val();
        executeMenuFiltering($('.tab-pill-btn.active-tab').attr('data-target-filter'), standardVal);
    });

    executeMenuFiltering(); // Root population invoke routine

    // --- 6. Today's Magical Offers Slider Mechanics ---
    let activeOfferIndex = 0;
    const totalOfferSlides = $('#magical-offers-track .carousel-item-slide');

    function shiftOfferSlideTo(targetIndex) {
        totalOfferSlides.removeClass('slide-state-active');
        $(totalOfferSlides[targetIndex]).addClass('slide-state-active');
        $('#magical-offers-track').css('transform', `translateX(-${targetIndex * 100}%)`);
    }

    $('#trigger-offer-next').on('click', function () {
        activeOfferIndex = (activeOfferIndex + 1) % totalOfferSlides.length;
        shiftOfferSlideTo(activeOfferIndex);
    });

    $('#trigger-offer-prev').on('click', function () {
        activeOfferIndex = (activeOfferIndex - 1 + totalOfferSlides.length) % totalOfferSlides.length;
        shiftOfferSlideTo(activeOfferIndex);
    });

    // --- 7. What We Offer Action Directional Rail Pipeline ---
    let offerRailIndex = 0;
    const railTextElements = $('.rail-text-data-node');
    const railGraphicElements = $('.vector-icon-node');
    const totalRailSteps = railTextElements.length;

    setInterval(function executeSynchronizedRailRotation() {
        let departureTextNode = $(railTextElements[offerRailIndex]);
        let departureGraphicNode = $(railGraphicElements[offerRailIndex]);

        departureGraphicNode.addClass('slide-state-exit').removeClass('slide-state-active');
        departureTextNode.removeClass('slide-state-active');

        offerRailIndex = (offerRailIndex + 1) % totalRailSteps;

        setTimeout(function () {
            railGraphicElements.removeClass('slide-state-exit');
            $(railTextElements[offerRailIndex]).addClass('slide-state-active');
            $(railGraphicElements[offerRailIndex]).addClass('slide-state-active');
        }, 550);
    }, 4000);

    // --- 8. Customer Testimonials Slider Array Logic ---
    let clientReviewIndex = 0;
    const absoluteReviewSlides = $('.review-layout-slide');

    function shiftReviewSlideTo(targetIdx) {
        $('#testimonials-moving-track').css('transform', `translateX(-${targetIdx * 100}%)`);
    }

    $('#review-next-trigger').on('click', function () {
        clientReviewIndex = (clientReviewIndex + 1) % absoluteReviewSlides.length;
        shiftReviewSlideTo(clientReviewIndex);
    });

    $('#review-prev-trigger').on('click', function () {
        clientReviewIndex = (clientReviewIndex - 1 + absoluteReviewSlides.length) % absoluteReviewSlides.length;
        shiftReviewSlideTo(clientReviewIndex);
    });

    // --- 9. Dynamic Date Constraints Logic Hook ---
    const localCalendarInput = $('#book_calendar_date');
    if (localCalendarInput.length > 0) {
        const todayDateObject = new Date();
        const yearISOString = todayDateObject.getFullYear();
        let monthISOString = todayDateObject.getMonth() + 1;
        let dayISOString = todayDateObject.getDate();

        if (monthISOString < 10) monthISOString = '0' + monthISOString;
        if (dayISOString < 10) dayISOString = '0' + dayISOString;

        const structuralFormattedMinBoundary = `${yearISOString}-${monthISOString}-${dayISOString}`;
        localCalendarInput.attr('min', structuralFormattedMinBoundary); // Blocks historic date entries natively
    }

    // --- 10. Forms Asynchronous Submissions Pipeline via PHP/AJAX ---
    $('#submission-order-form').on('submit', function (e) {
        e.preventDefault();
        const actionTargetButton = $('#submit-btn-order');
        const feedbackContainer = $('#order-form-async-response');

        $.ajax({
            url: 'backend/process-order.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (payloadResponse) {
                feedbackContainer.addClass('render-success').html(payloadResponse);
                actionTargetButton.css('background-color', '#D97706').text('Order Processed'); // Enforces target color transformation requirement
            }
        });
    });

    $('#submission-booking-form').on('submit', function (e) {
        e.preventDefault();
        const actionTargetButton = $('#submit-btn-booking');
        const feedbackContainer = $('#booking-form-async-response');

        $.ajax({
            url: 'backend/process-booking.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (payloadResponse) {
                feedbackContainer.addClass('render-success').html(payloadResponse);
                actionTargetButton.css('background-color', '#D97706').text('Booking Confirmed'); // Enforces spot reservation state conversion requirement
            }
        });
    });
});