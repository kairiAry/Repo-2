const quotes = [
    "yang hitam biarlah hitam yang putih hitamkanlah, yang baik biarlah baik yang jahat baikkanlah.",
    "Meski tidak selalu mendapat balasan yang baik, jangan lelah untuk menjadi orang yang baik.",
    "Tidak ada orang baik yang tidak punya masa lalu, tidak ada pula orang jahat yang tidak punya masa depan. Setiap orang memiliki kesempatan yang sama untuk jadi lebih baik.",
    "Dari magrib kita bisa melihat bahwa di setiap kegelapan pasti ada senja yang menyinari keindahan.",
    "Jangan pernah iri dengan orang lain, karena setiap kelebihan pasti ada kembalian.",
    "Jika orang tuamu tidak kaya tapi masih mampu memberimu kehidupan yang nyaman dan menyenangkan, maka hargailah usaha dan pengorbanan mereka.",
    "Jika hari ini belum berhasil, bukan berarti impianmu telah berakhir. Kegagalan itu sebuah pembelajaran bukan tanda berakhirnya sebuah harapan.",
    "Terkadang senyuman menjadi pilihan terbaik disaat rasa sedih tidak bisa dijelaskan dengan kata-kata.",
    "Manusia bisa salah dan benar, maka kita dianjurkan saling mengingatkan, bukan saling menyalahkan.",
    "Proses memanglah tidak mudah, tapi siapa yang mau berproses pasti akan berubah.",
    "Jangan berfikir untuk memanfaatkan orang lain jika dirimu belum bermanfaat.",
    "Sehitam-hitamnya suatu batang yang keluar tetaplah putih, seburuk-buruknya penampilan seseorang bisa saja hatinya lebih bersih.",
    "Ingatlah bawha hari ini hanyalah hari yang buruk, bukan kehidupan yang buruk.",
    "Bahagia itu bukan tentang memiliki segalanya, tapi tentang mensyukuri apa yang kita miliki.",
    "Motivasi tanpa aksi hanyalah halusinasi.",
    "Tidak apa-apa menjadi hitam, karena putih cepat kotor.",
    "Setenar apapun namamu ujung-ujungnya akan berada di batu nisan juga.",
    "Jika semuanya sudah tidak seperti biasanya, maka biasakanlah dirimu tanpa semuanya.",
    "Jika kamu malu dalam melakukan suatu hal, buang dulu kemaluanmu.",
    "Jika kamu gagal menjadi orang sukses setidaknya kamu sukses menjadi orang gagal.",
    "Jika tidak ada bahu untuk bersandar masih ada nasi untuk didahar, terkadang kita butuh asupan bukan harapan.",
];

function quote() {
    const pilihQuote = Math.floor(Math.random() * quotes.length);
    const ambilQuote = quotes[pilihQuote];
    document.getElementById("quote").textContent = ambilQuote;
}