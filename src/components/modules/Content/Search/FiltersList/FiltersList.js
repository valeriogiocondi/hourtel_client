'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FiltersList.less';

class FiltersList extends Component {
  render() {
    return (
      <section id="filters-list">
          <div className="mini-select price-min">
            <div className="label">PREZZO MIN</div>
            <select>
              <option value="0">0 &euro;</option>
              <option value="50">50 &euro;</option>
              <option value="100">100 &euro;</option>
              <option value="150">150 &euro;</option>
              <option value="200">200 &euro;</option>
            </select>
          </div>
          <div className="mini-select price-max">
            <div className="label">PREZZO MAX</div>
            <select>
              <option value="50">50 &euro;</option>
              <option value="100">100 &euro;</option>
              <option value="150">150 &euro;</option>
              <option value="200">200 &euro;</option>
              <option value="no-max">+200 &euro;</option>
            </select>
          </div>
          <div className="type-structure">
            <header>
              <h1>TIPO STRUTTURA</h1>
            </header>
            <section>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="1" />
                </div>
                <div className="col label">HOTEL 1 STELLA</div>
              </div>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="2" />
                </div>
                <div className="col label">HOTEL 2 STELLE</div>
              </div>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="3" />
                </div>
                <div className="col label">HOTEL 3 STELLE</div>
              </div>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="4" />
                </div>
                <div className="col label">HOTEL 4 STELLE</div>
              </div>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="5" />
                </div>
                <div className="col label">HOTEL 5 STELLE</div>
              </div>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="6" />
                </div>
                <div className="col label">BED AND BREAKFAST</div>
              </div>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="7" />
                </div>
                <div className="col label">GUEST HOUSE</div>
              </div>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="8" />
                </div>
                <div className="col label">RESIDENZA D'EPOCA</div>
              </div>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="9" />
                </div>
                <div className="col label">AGRITURISMO</div>
              </div>
              <div className="checkbox">
                <div className="col input">
                  <input type="checkbox" value="10" />
                </div>
                <div className="col label">OSTELLO</div>
              </div>
            </section>
          </div>
          <div className="hotel-services">
            <header>
              <h1>SERVIZI DELLA STRUTTURA</h1>
            </header>
            <section>
              <div className="checkbox breakfast_room">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">RECEPTION 24/24H</div>
              </div>
              <div className="checkbox free-wifi">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">WI-FI GRATIS</div>
              </div>
              <div className="checkbox parking">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">PARCHEGGIO</div>
              </div>
              <div className="checkbox pets">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">ANIMALI DOMESTICI</div>
              </div>
              <div className="checkbox tv_satellite">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">TV VIA CAVO</div>
              </div>
              <div className="checkbox smoking_room">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">CAMERA PER FUMATORI</div>
              </div>
              <div className="checkbox soundproofed_room">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">CAMERA INSONORIZZATA</div>
              </div>
              <div className="checkbox disabled_room">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">CAMERA DISABILI</div>
              </div>
              <div className="checkbox heating">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">RISCALDAMENTI</div>
              </div>
              <div className="checkbox air_conditioning">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">ARIA CONDIZIONATA</div>
              </div>
            </section>
          </div>
          <div className="room-services">
            <header>
              <h1>SERVIZI DELLA CAMERA</h1>
            </header>
            <section>
              <div className="checkbox breakfast_room">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">COLAZIONE IN CAMERA</div>
              </div>
              <div className="checkbox minibar">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">MINIBAR</div>
              </div>
              <div className="checkbox safe">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">CASSAFORTE</div>
              </div>
              <div className="checkbox tv">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">TV</div>
              </div>
              <div className="checkbox tv_satellite">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">TV VIA CAVO</div>
              </div>
              <div className="checkbox smoking_room">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">CAMERA PER FUMATORI</div>
              </div>
              <div className="checkbox soundproofed_room">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">CAMERA INSONORIZZATA</div>
              </div>
              <div className="checkbox disabled_room">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">CAMERA DISABILI</div>
              </div>
              <div className="checkbox heating">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">RISCALDAMENTI</div>
              </div>
              <div className="checkbox air_conditioning">
                <div className="col input">
                  <input type="checkbox" />
                </div>
                <div className="col label">ARIA CONDIZIONATA</div>
              </div>
            </section>
          </div>
      </section>
    );
  }
}

export default FiltersList;