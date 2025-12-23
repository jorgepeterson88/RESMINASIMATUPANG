'use client';

import { ArrowLeft, FileText, ShoppingCart, Shield, AlertCircle, CreditCard } from 'lucide-react';

export default function TermsAndConditions() {
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
                <p className="text-xs text-gray-500">Terms & Conditions</p>
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
              <FileText className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-600">
              RESMINA SIMATUPANG - Ketentuan Penggunaan Layanan
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-800">
                Selamat datang di <strong>RESMINA SIMATUPANG</strong>. Syarat dan ketentuan ini mengatur 
                penggunaan layanan kami. Dengan menggunakan website dan layanan kami, Anda setuju untuk 
                mematuhi syarat dan ketentuan yang berlaku.
              </p>
            </div>

            {/* General Terms */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Ketentuan Umum</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">1. Definisi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Website:</strong> Platform online RESMINA SIMATUPANG</li>
                    <li><strong>Pengguna:</strong> Individu yang menggunakan layanan kami</li>
                    <li><strong>Produk:</strong> Sepatu dan aksesoris yang kami jual</li>
                    <li><strong>Transaksi:</strong> Proses pembelian produk</li>
                    <li><strong>Layanan:</strong> Semua fitur dan fasilitas yang kami sediakan</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">2. Penerimaan Syarat</h3>
                  <p className="text-gray-600">
                    Dengan mengakses dan menggunakan website kami, Anda menyatakan bahwa:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                    <li>Anda telah membaca, memahami, dan menyetujui syarat ini</li>
                    <li>Anda berusia minimal 18 tahun atau memiliki izin orang tua</li>
                    <li>Anda memiliki kapasitas hukum untuk melakukan transaksi</li>
                    <li>Informasi yang Anda berikan adalah benar dan akurat</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Products and Services */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Produk dan Layanan</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">3. Deskripsi Produk</h3>
                <p className="text-gray-600 mb-4">
                  Kami berusaha menyajikan informasi produk yang akurat, namun:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Warna produk mungkin sedikit berbeda karena pencahayaan</li>
                  <li>Ukuran dapat bervariasi tergantung produsen</li>
                  <li>Stok produk dapat berubah sewaktu-waktu</li>
                  <li>Kami berhak mengubah spesifikasi produk tanpa pemberitahuan</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="font-semibold text-gray-900 mb-3">4. Harga dan Pembayaran</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Harga yang tercantum belum termasuk ongkos kirim</li>
                  <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan</li>
                  <li>Pembayaran harus dilakukan melalui metode yang disediakan</li>
                  <li>Pembayaran dianggap sah setelah konfirmasi dari sistem</li>
                  <li>Pajak yang berlaku adalah tanggung jawab pembeli</li>
                </ul>
              </div>
            </div>

            {/* Orders and Shipping */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pesanan dan Pengiriman</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">5. Proses Pemesanan</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Pesanan akan diproses setelah pembayaran dikonfirmasi</li>
                  <li>Kami akan mengirimkan konfirmasi pesanan via email</li>
                  <li>Pesanan dapat dibatalkan jika stok tidak tersedia</li>
                  <li>Waktu pemrosesan maksimal 2x24 jam</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="font-semibold text-gray-900 mb-3">6. Pengiriman</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Pengiriman menggunakan jasa ekspedisi terpercaya</li>
                  <li>Estimasi waktu pengiriman tidak termasuk hari libur</li>
                  <li>Resi pengiriman akan dikirimkan via email</li>
                  <li>Risiko pengiriman ditanggung pembeli setelah barang dikirim</li>
                  <li>Biaya pengiriman ditanggung pembeli</li>
                </ul>
              </div>
            </div>

            {/* Returns and Refunds */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengembalian dan Pengembalian Dana</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">7. Kebijakan Pengembalian</h3>
                <p className="text-gray-600 mb-4">
                  Pengembalian produk dapat dilakukan jika:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Produk cacat atau rusak saat diterima</li>
                  <li>Ukuran tidak sesuai (penukaran ukuran)</li>
                  <li>Produk salah dikirim</li>
                  <li>Pengembalian maksimal 7 hari setelah barang diterima</li>
                  <li>Produk harus dalam kondisi asli dengan label lengkap</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <h3 className="font-semibold text-gray-900 mb-3">8. Proses Pengembalian Dana</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Pengembalian dana diproses maksimal 14 hari kerja</li>
                  <li>Biaya pengiriman pengembalian ditanggung pembeli</li>
                  <li>Dana dikembalikan ke metode pembayaran asli</li>
                  <li>Biaya administrasi bank mungkin berlaku</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  Semua konten di website ini dilindungi hak cipta:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Logo, desain, dan merek dagang milik RESMINA SIMATUPANG</li>
                  <li>Foto produk tidak boleh digunakan tanpa izin</li>
                  <li>Konten website tidak boleh disalin atau disebarluaskan</li>
                  <li>Pelanggaran akan ditindak sesuai hukum yang berlaku</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Batasan Tanggung Jawab</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Kami tidak bertanggung jawab atas kerugian tidak langsung</li>
                  <li>Tanggung jawab maksimal seharga pembelian produk</li>
                  <li>Kami tidak menjamin website bebas dari gangguan teknis</li>
                  <li>Kami tidak bertanggung jawab atas keterlambatan pengiriman</li>
                  <li>Force majeur dibebaskan dari tanggung jawab</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Ketentuan Pembayaran</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Pembayaran harus dilunasi dalam waktu yang ditentukan</li>
                  <li>Pesanan akan dibatalkan otomatis jika tidak dibayar</li>
                  <li>Pembayaran yang sudah dilakukan tidak dapat dibatalkan</li>
                  <li>Kami berhak menolak metode pembayaran tertentu</li>
                  <li>Verifikasi pembayaran dapat dilakukan jika diperlukan</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Terminasi</h2>
              <p className="text-gray-600 mb-4">
                Kami berhak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Membatasi akses pengguna yang melanggar syarat</li>
                <li>Membatalkan pesanan yang mencurigakan</li>
                <li>Menghentikan layanan sementara untuk maintenance</li>
                <li>Mengubah atau menghentikan layanan tanpa pemberitahuan</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600">
                  Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. 
                  Setiap sengketa akan diselesaikan melalui perundingan musyawarah 
                  untuk mufakat. Jika tidak mencapai kesepakatan, sengketa akan 
                  diselesaikan di pengadilan negeri Tangerang.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan kami, silakan hubungi:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@resminasimatupang.com</p>
                <p><strong>Telepon:</strong> 082382466214</p>
                <p><strong>Alamat:</strong> BUMI PASAR KEMIS INDAH I-3/08, Pasar Kemis, Tangerang, Banten 42123</p>
              </div>
            </div>

            {/* Agreement */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Persetujuan</h3>
              <p className="text-gray-600">
                Dengan menggunakan website RESMINA SIMATUPANG, Anda menyatakan bahwa 
                Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini. 
                Jika Anda tidak setuju dengan bagian manapun dari syarat ini, 
                jangan menggunakan layanan kami.
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