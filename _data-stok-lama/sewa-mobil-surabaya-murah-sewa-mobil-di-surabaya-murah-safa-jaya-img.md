---
language: id
permalink: /sewa-mobil-surabaya-murah/sewa-mobil-di-surabaya-murah-safa-jaya-img/
layout: SEO
title: Sewa mobil surabaya murah Safa Jaya
description: Untuk mendapatkan Sewa mobil surabaya murah hub. 081234-2200-73 Mulai 200rb/hari Avanza, Elf, Ertiga, HiAce, Innova Grand New, Innova Reborn, Xenia
keyword: rental mobil surabaya, sewa mobil surabaya, sewa mobil surabaya murah, rental mobil surabaya murah, safajaya, safa jaya, safajaya.com, sewa mobil di surabaya, rental mobil di surabaya
image: /images/girl-346231_640.jpg
title-h1: Rental Mobil di Surabaya
nama-penulis: Denny Rakhmad Widi Ashari
date: 2020-02-06
modified-date: 2020-02-06
---
<h2>Pilihan kendaraan Rental Mobil Surabaya</h2>
<p>Apabila Anda masih bingung dengan gambaran seperti apa kendaraannya, berikut adalah pilihan kendaraan yang disediakan Rental Mobil Surabaya :</p>
<br>
<ul class="basic-listing-card user-reviews">
    <amp-carousel type="carousel" height="520" layout="fixed-height">
        {% assign sorted_products = site.data-product | sort: 'nomor-urut' %}
        {% for item in sorted_products %}
        <li class="card">
            {% if item.murah and item.murah != "" and item.murah != false %}
            <div class="ribbon-wrapper">
                <div class="ribbon-murah">{% if item.murah == true or item.murah == "murah" or item.murah == "MURAH" %}MURAH{% else %}{{ item.murah }}{% endif %}</div>
            </div>
            {% endif %}
            <a href="{{ item.url }}" title="{{ item.nama-produk }}">
                <div class="card-thumb">
                    <div class="card-logo">
                        <amp-img src="/images/logo-safajaya-kotak.png" width="164" height="82" layout="fixed" alt="{{ site.company }}" title="{{ site.company }}"></amp-img>
                    </div>
                    <amp-img class="card-car-img" src="{{ item.image }}" width="1" height="1" alt="{{ item.nama-produk }} " title="{{ item.nama-produk }} " layout="responsive"></amp-img>
                </div>
            </a>
            <div class="card-panel">
                <div class="product-header-center">
                    <a class="card-product-price" href="{{ item.url }}" title="{{ item.nama-produk }}">Rp {{ item.harga }}</a>
                    <a class="card-product-title" href="{{ item.url }}" title="{{ item.nama-produk }}">{{ item.nama-produk }}</a>
                </div>
                <ul class="product-specs">
                    <li><span class="spec-label">{{ item.durasi }}</span> : <span class="spec-val">{{ item.ket-durasi }}</span></li>
                    <li><span class="spec-label">{{ item.fasilitas }}</span> : <span class="spec-val">{{ item.ket-fasilitas-1 }} {{ item.ket-fasilitas-2 }}</span></li>
                    <li><span class="spec-label">{{ item.rute }}</span> : <span class="spec-val">{{ item.ket-rute }}, {{ item.ex-rute }}</span></li>
                </ul>
                <div class="product-more">
                    <a href="{{ item.url }}" title="Selengkapnya tentang {{ item.nama-produk }}"><b>Selengkapnya...</b></a>
                </div>
            </div>
            <div class="card-action">
                <a class="beli-sekarang" href="https://api.whatsapp.com/send?text=halo%20{{ site.company }}%0ASaya%20mau%20pesan%0AKendaraan%20:%20{{ item.nama-produk }}%0A{{ site.siteurl }}{{ item.url }}%0ANama%20:%20%0AAlamat%20:%20%0ATanggal%20:%20%0ADurasi%20:%20&phone={{ site.telephone }}"><i class="icon-whatsapp"></i> Pesan Sekarang</a>
            </div>
        </li>
        {% endfor %}
    </amp-carousel>
</ul>
<br>
<p>
    Attribusi:
</p>
Image by <a href="https://pixabay.com/users/avtoritetkhv-257125/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=346231">avtoritetkhv</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=346231">Pixabay</a>