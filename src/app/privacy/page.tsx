'use client';

import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <ArrowLeft className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                <span className="text-gray-600 hover:text-blue-600">Kembali</span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">RESMINA SIMATUPANG</h1>
                <p className="text-xs text-gray-500">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600">
              RESMINA SIMATUPANG - Perlindungan Data Pribadi Anda
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-800">
                Di <strong>RESMINA SIMATUPANG</strong>, kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi 
                yang Anda berikan saat menggunakan layanan kami.
              </p>
            </div>

            {/* Data Collection */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Data yang Kami Kumpulkan</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon</li>
                    <li>Alamat email</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Data Transaksi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Riwayat pembelian</li>
                    <li>Produk yang dilihat</li>
                    <li>Keranjang belanja</li>
                    <li>Preferensi produk</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Data Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Waktu akses</li>
                    <li>Cookies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Penggunaan Data</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  Kami menggunakan data pribadi Anda untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memproses dan mengirim pesanan Anda</li>
                  <li>Memberikan layanan pelanggan</li>
                  <li>Menginformasikan produk dan promosi terbaru</li>
                  <li>Meningkatkan kualitas layanan</li>
                  <li>Melindungi dari aktivitas penipuan</li>
                  <li>Memenuhi kewajiban hukum</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  Kami melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enkripsi data saat transmisi dan penyimpanan</li>
                  <li>Akses terbatas untuk authorized personnel</li>
                  <li>Security protocols yang updated</li>
                  <li>Regular security audits</li>
                  <li>Compliance dengan standar keamanan industri</li>
                </ul>
              </div>
            </div>

            {/* Third Party Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Berbagi Data dengan Pihak Ketiga</h2>
              <p className="text-gray-600 mb-4">
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                kecuali dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Untuk memproses pembayaran (payment gateway)</li>
                <li>Untuk pengiriman produk (jasa pengiriman)</li>
                <li>Dengan persetujuan Anda yang jelas</li>
                <li>Untuk memenuhi kewajiban hukum</li>
                <li>Untuk melindungi hak dan keamanan kami</li>
              </ul>
            </div>

            {/* User Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda sebagai Pengguna</h2>
              <p className="text-gray-600 mb-4">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses data pribadi Anda</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus data pribadi Anda</li>
                <li>Menolak pemasaran langsung</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Cookies</h2>
              <p className="text-gray-600 mb-4">
                Kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyimpan preferensi Anda</li>
                <li>Menganalisis traffic website</li>
                <li>Mempersonalisasi pengalaman berbelanja</li>
                <li>Menyimpan keranjang belanja</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                menggunakan hak privasi Anda, silakan hubungi:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@resminasimatupang.com</p>
                <p><strong>Telepon:</strong> 082382466214</p>
                <p><strong>Alamat:</strong> BUMI PASAR KEMIS INDAH I-3/08, Pasar Kemis, Tangerang, Banten 42123</p>
              </div>
            </div>

            {/* Updates */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Pembaruan Kebijakan</h3>
              <p className="text-gray-600">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                Perubahan akan diinformasikan melalui website atau email. 
                Penggunaan continued dari layanan kami berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <h3 className="text-xl font-bold">RESMINA SIMATUPANG</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Bisnis eceran sepatu terpercaya dengan koleksi berkualitas tinggi
            </p>
            <p className="text-sm text-gray-500">
              © 2024 RESMINA SIMATUPANG. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}