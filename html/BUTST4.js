 function hitungtotal()
        {
            var nama = (document.form.nama.value);
            var tujuan = (document.form.tujuan.value);
            var kelas = (document.form.kelas.value);
            var jumlahtiket = parseFloat(document.form.jumlah.value);
            var ht = 0.0;
            var sub = 0.0;
            var diskon =0.0;
            var total =0.0;
            
            if (tujuan=="Jakarta")
            {
                if (kelas=="Eksekutif")
                {
                    ht = 200000;
                }
                else if (kelas=="Bisnis")
                {
                    ht = 80000;
                }
                else
                {
                    ht = 60000;
                }
            }
            else if (tujuan=="Surabaya")
            {
                if (kelas=="Eksekutif")
                {
                    ht = 140000;
                }
                else if (kelas=="Bisnis")
                {
                    ht = 60000;
                }
                else
                {
                    ht = 40000;
                }
            }
            else if (tujuan=="Yogyakarta")
            {
                if (kelas=="Eksekutif")
                {
                    ht = 130000;
                }
                else if (kelas=="Bisnis")
                {
                    ht = 50000;
                }
                else
                {
                    ht = 30000;
                }
            }
            else if (tujuan=="Bandung")
            {
                if (kelas=="Eksekutif")
                {
                    ht = 180000;
                }
                else if (kelas=="Bisnis")
                {
                    ht = 70000;
                }
                else
                {
                    ht = 65000;
                }
            }
            else 
            {
                if (kelas=="Eksekutif")
                {
                    ht = 150000;
                }
                else if (kelas=="Bisnis")
                {
                    ht = 75000;
                }
                else
                {
                    ht = 45000;
                }
            }
            sub = jumlahtiket*ht; 

            if (document.form.member.checked==true)
            {
                diskon = 0.1*sub;
            }
            else
            {
                diskon = 0.0;
            } 

            total = sub-diskon;
            document.form.harga_tiket.value = eval(ht);
            document.form.sub_total.value = eval(sub);
            document.form.potongan_harga.value = eval(diskon);
            document.form.total_bayar.value = eval(total);
        }