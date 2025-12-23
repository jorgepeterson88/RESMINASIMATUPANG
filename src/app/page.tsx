'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart, Phone, Mail, MapPin, Star, Truck, Shield, RefreshCw } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RS</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">RESMINA SIMATUPANG</h1>
                  <p className="text-xs text-gray-500">Premium Shoe Collection</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Kontak</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Hubungi Kami</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Beranda</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Produk</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Temukan <span className="text-blue-600">Sepatu Impian</span> Anda
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Koleksi sepatu premium dengan kualitas terbaik dan desain terkini. 
                  RESMINA SIMATUPANG menyediakan berbagai pilihan sepatu untuk semua occasions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Lihat Koleksi
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition text-lg font-semibold">
                  Hubungi Kami
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-sm text-gray-600">1000+ Pelanggan Puas</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg mb-4"></div>
                      <h3 className="font-semibold text-gray-900">Formal Shoes</h3>
                      <p className="text-sm text-gray-600">Elegant & Professional</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg mb-4"></div>
                      <h3 className="font-semibold text-gray-900">Sports Shoes</h3>
                      <p className="text-sm text-gray-600">Comfort & Performance</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg mb-4"></div>
                      <h3 className="font-semibold text-gray-900">Casual Shoes</h3>
                      <p className="text-sm text-gray-600">Relaxed & Stylish</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg mb-4"></div>
                      <h3 className="font-semibold text-gray-900">Fashion Shoes</h3>
                      <p className="text-sm text-gray-600">Trendy & Modern</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pengiriman aman dan cepat ke seluruh Indonesia</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kualitas Terjamin</h3>
              <p className="text-gray-600">Produk berkualitas dengan garansi kepuasan</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Penukaran Mudah</h3>
              <p className="text-gray-600">Penukaran produk jika ukuran tidak sesuai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Koleksi Unggulan</h2>
            <p className="text-xl text-gray-600">Produk terbaik pilihan pelanggan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Executive Oxford", price: "Rp 899.000", category: "Formal", rating: 4.8 },
              { name: "Sport Runner Pro", price: "Rp 1.299.000", category: "Sports", rating: 4.9 },
              { name: "Casual Comfort", price: "Rp 699.000", category: "Casual", rating: 4.7 }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Tentang <span className="text-blue-600">RESMINA SIMATUPANG</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Kami adalah bisnis eceran sepatu yang berkomitmen untuk menyediakan produk berkualitas 
                  tinggi dengan harga terjangkau. Dengan pengalaman bertahun-tahun dalam industri retail sepatu, 
                  kami memahami kebutuhan pelanggan akan kenyamanan dan gaya.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kualitas Terbaik</h4>
                    <p className="text-gray-600">Produk dengan bahan premium dan proses produksi standar internasional</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Harga Terjangkau</h4>
                    <p className="text-gray-600">Harga kompetitif dengan kualitas yang sebanding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pelayanan Prima</h4>
                    <p className="text-gray-600">Tim profesional siap membantu kebutuhan Anda</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">5+</div>
                  <p className="text-gray-600">Tahun Pengalaman</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">1000+</div>
                  <p className="text-gray-600">Pelanggan Puas</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-gray-600">Model Sepatu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">Siap melayani kebutuhan sepatu Anda</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">
                      BUMI PASAR KEMIS INDAH I-3/08, Desa/Kelurahan Pasar Kemis, 
                      Kec. Pasar Kemis, Kab. Tangerang, Prov. Banten 42123
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telepon</h4>
                    <p className="text-gray-600">082382466214</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@resminasimatupang.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">RESMINA SIMATUPANG</h3>
                  <p className="text-sm text-gray-400">Premium Shoe Collection</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Bisnis eceran sepatu terpercaya dengan koleksi berkualitas tinggi 
                dan pelayanan terbaik untuk kepuasan pelanggan.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">Beranda</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition">Produk</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">Tentang</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 RESMINA SIMATUPANG. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}