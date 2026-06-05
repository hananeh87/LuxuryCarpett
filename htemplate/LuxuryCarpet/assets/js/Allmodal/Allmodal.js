$(document).ready(function () {

    //ساخت  سرچ  و همبرگر منو
    $(".btn-show").on("click", function () {
        const modalName = $(this).data("model"); // مثلاً "menuBar"
        const $targetModal = $(`.h-modal[data-model="${modalName}"]`);

        // نمایش منو
        $targetModal.addClass("show");

        // اضافه کردن overlay فقط اگر وجود نداشته باشه
        if ($(".overlay[data-model='" + modalName + "']").length === 0) {
            const $overlay = $('<div class="overlay" data-model="' + modalName + '"></div>');
            $("body").append($overlay);
        }
    });
    // کلیک روی overlay برای بستن منو و حذف overlay
    $(document).on("click", ".overlay", function () {
        const modalName = $(this).data("model");
        const $targetModal = $(`.h-modal[data-model="${modalName}"]`);

        $targetModal.removeClass("show");
        $(this).remove();
    });
    // کلیک روی آیکون fa-close برای بستن منو
    $(document).on("click", ".btn-close", function () {
        const modalName = $(this).data("model");
        const $targetModal = $(`.h-modal[data-model="${modalName}"]`);

        $targetModal.removeClass("show");
        $(".overlay[data-model='" + modalName + "']").remove();
    });
    //پایان ساخت  سرچ  و همبرگر منو
});