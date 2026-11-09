            let gelasDitangan = null;

            const gelas1 = document.querySelector(".gelas1");
            const gelas2 = document.querySelector(".gelas2");
            const gelas3 = document.querySelector(".gelas3");

            function pindahkanAir(gelas) {

                if (gelasDitangan == null) {

                    if (gelas.classList.contains("bg-transparent")) {
                        return;
                    }

                    gelasDitangan = gelas;

                } else {

                    if (gelas == gelasDitangan) {
                        gelasDitangan = null;
                        return;
                    }

                    if (gelas.classList.contains("bg-transparent")) {

                        if (gelasDitangan.classList.contains("bg-red")) {
                            gelas.classList.remove("bg-transparent");
                            gelas.classList.add("bg-red");

                            gelasDitangan.classList.remove("bg-red");
                            gelasDitangan.classList.add("bg-transparent");

                        } else if (gelasDitangan.classList.contains("bg-blue")) {
                            gelas.classList.remove("bg-transparent");
                            gelas.classList.add("bg-blue");

                            gelasDitangan.classList.remove("bg-blue");
                            gelasDitangan.classList.add("bg-transparent");
                        }

                        gelasDitangan = null;
                    }
                }

                console.log(gelasDitangan);
            }

            gelas1.addEventListener("click", function () {
                pindahkanAir(gelas1);
            });

            gelas2.addEventListener("click", function () {
                pindahkanAir(gelas2);
            });

            gelas3.addEventListener("click", function () {
                pindahkanAir(gelas3);
            });