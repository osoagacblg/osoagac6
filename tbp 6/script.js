const agaclar = [
    {
        ad: 'Çınar (<span class="bilimsel">Platanus</span>)',
        bilgi: "10-15 yaş aralığındadır.El ayasına benzeyen, genellikle 5-7 loblu ve geniş yapraklara sahiptir. Bahar aylarında parlak yeşil bir renktedir.Çınarların en belirgin özelliklerinden biri, yaşlandıkça gövde kabuklarının levhalar halinde dökülerek alacalı (mozaik gibi) bir görünüm kazanmasıdır. Bu ağaç henüz genç olduğu için kabuk yapısı daha düzgündür.Çok hızlı büyüyen ve çok geniş bir tepe tacı oluşturabilen bir ağaçtır. Bu özelliği nedeniyle tarih boyunca şehir meydanlarında gölge ağacı olarak dikilmiştir.Kirli havaya ve zorlu şehir koşullarına son derece dayanıklıdır.",
        resim: "images/agac6.jpg"
    },
];

function getId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id")) || 1;
}

function agaciGoster(id) {
    const agac = agaclar[id - 1];
    document.getElementById("agacAdi").innerHTML = agac.ad;
    document.getElementById("agacBilgi").innerText = agac.bilgi;
    document.getElementById("agacResim").src = agac.resim;
}

function sonrakiAgac() {
    let id = getId();
    id++;
    if (id > agaclar.length) id = 1;
    window.location.search = "?id=" + id;
}

agaciGoster(getId());