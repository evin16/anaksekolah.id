import React from "react";
import K1 from "./assets/K1.png";

export default function SD() {
  return (
    <div className="main">
      <div class="fluid-jumbotron bg-blue p-5">
        <div className="container">
          <div className="overlay text-dark align-center">
            <h5 class="display-5 fw-bold my-3 text-center text-white">
              Temukan Keseruan <br />
              Pembelajaran Online <br />
              Yang Menarik
            </h5>
          </div>
        </div>
      </div>

      <div className="container my-3 bg-blue border-25 p-3">
        <div class="d-flex row mx-4 py-3 text-center">
          <div className="col-md col-sm-12">
            <h5 className="my-3 text-white">Pilih Jenjang Pendidikan : </h5>
          </div>
          <div className="col-md">
            <a
              href="/SD"
              className="btn btn-primary w-100 my-2 fs-4 rounded-pill fw-bold"
            >
              SD
            </a>
          </div>
          <div className="col-md">
            <a
              href=""
              className="btn btn-primary w-100 my-2 fs-4 rounded-pill fw-bold"
            >
              SMP
            </a>
          </div>
          <div className="col-md">
            <a
              href=""
              className="btn btn-primary w-100 my-2 fs-4 rounded-pill fw-bold"
            >
              SMA
            </a>
          </div>
          <div className="col-md">
            <a
              href=""
              className="btn btn-primary w-100 my-2 fs-4 rounded-pill fw-bold"
            >
              SMK
            </a>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
          <div>
            <div class="card">
              <img src={K1} class="card-img-top" />
              <div class="card-body">
                <a
                  href="/silabus"
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  <h5 class="card-title">Pembelajaran Kelas 1</h5>
                </a>
              </div>
              <div class="card-footer">
                <a href="/invoice" className="btn btn-link text-bold">
                  Daftar Kelas
                </a>
              </div>
            </div>
          </div>
          <div class="col height">
            <div class="card">
              <img src={K1} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Pembelajaran Kelas 2</h5>
              </div>
              <div class="card-footer">
                <a href="/invoice" className="btn btn-link text-bold">
                  Daftar Kelas
                </a>
              </div>
            </div>
          </div>
          <div class="col height">
            <div class="card height">
              <img src={K1} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Pembelajaran Kelas 3</h5>
              </div>
              <div class="card-footer">
                <a href="/invoice" className="btn btn-link text-bold">
                  Daftar Kelas
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4 my-3 text-center">
          <div class="col height">
            <div class="card">
              <img src={K1} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Pembelajaran Kelas 4</h5>
              </div>
              <div class="card-footer">
                <small class="text-muted">
                  <a href="/invoice" className="btn btn-link text-bold">
                    Daftar Kelas
                  </a>
                </small>
              </div>
            </div>
          </div>
          <div class="col height">
            <div class="card">
              <img src={K1} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Pembelajaran Kelas 5</h5>
              </div>
              <div class="card-footer">
                <a href="/invoice" className="btn btn-link text-bold">
                  Daftar Kelas
                </a>
              </div>
            </div>
          </div>
          <div class="col height">
            <div class="card height">
              <img src={K1} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Pembelajaran Kelas 6</h5>
              </div>
              <div class="card-footer">
                <a href="/invoice" className="btn btn-link text-bold">
                  Daftar Kelas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
