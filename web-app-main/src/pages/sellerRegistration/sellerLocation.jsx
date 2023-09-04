import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

//icon
import { IoIosArrowBack } from "react-icons/io";

export const SellerLocation = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitForm = async (data) => {
    alert(JSON.stringify(data, null, 4));
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response.json());
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/businessInfo");
    }
  };
  return (
    <div className="w-screen h-screen bg-[#1D003A] flex justify-center text-white">
      <div className="w-full h-full bg-[#130029] max-w-[600px] flex flex-col gap-6 p-8">
        <Link to="/explore">
          <IoIosArrowBack className="text-[40px] text-white cursor-pointer" />
        </Link>
        <div className="w-full text-center text-[rgba(206,_206,_255,_1)] mb-4">
          <h2 className="text-3xl font-semibold mb-1">
            First things first, enter your registered location and selling point
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="grid place-content-center md:place-content-center space-y-[340px]"
        >
          <div className="grid place-content-center md:place-content-center">
            <div className="pt-[35px] flex pb-[10px]">
              Where is your business registered?
            </div>
            <select
              {...register("country")}
              id="country"
              name="country"
              className="form-control bg-[#070010] h-[60px]"
              placeholder="Select country"
              required
            >
              <option value="">Select country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, The Democratic Republic of The">
                Congo, The Democratic Republic of The
              </option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'ivoire">Cote D`ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">
                Falkland Islands (Malvinas)
              </option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-bissau">Guinea-bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands">
                Heard Island and Mcdonald Islands
              </option>
              <option value="Holy See (Vatican City State)">
                Holy See (Vatican City State)
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">
                Iran, Islamic Republic of
              </option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">
                Korea, Democratic People Republic of
              </option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">
                Lao People Democratic Republic
              </option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">
                Libyan Arab Jamahiriya
              </option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia, The Former Yugoslav Republic of">
                Macedonia, The Former Yugoslav Republic of
              </option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">
                Micronesia, Federated States of
              </option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">
                Northern Mariana Islands
              </option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">
                Palestinian Territory, Occupied
              </option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Pierre and Miquelon">
                Saint Pierre and Miquelon
              </option>
              <option value="Saint Vincent and The Grenadines">
                Saint Vincent and The Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and The South Sandwich Islands">
                South Georgia and The South Sandwich Islands
              </option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">
                Svalbard and Jan Mayen
              </option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">
                Tanzania, United Republic of
              </option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-leste">Timor-leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">
                Turks and Caicos Islands
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">
                United States Minor Outlying Islands
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="Virgin Islands, British">
                Virgin Islands, British
              </option>
              <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <div className="pt-[35px] flex pb-[10px]">Currency</div>
            <select
              {...register("currency")}
              id="currency"
              name="currency"
              className="form-select bg-[#070010] h-[60px]"
              placeholder="Select currency"
              required
            >
              <option value="">Select currency</option>
              <option value="AFN">Afghan Afghani - ؋</option>
              <option value="ALL">Albanian Lek - Lek</option>
              <option value="DZD">Algerian Dinar - دج</option>
              <option value="AOA">Angolan Kwanza - Kz</option>
              <option value="ARS">Argentine Peso - $</option>
              <option value="AMD">Armenian Dram - ֏</option>
              <option value="AWG">Aruban Florin - ƒ</option>
              <option value="AUD">Australian Dollar - $</option>
              <option value="AZN">Azerbaijani Manat - m</option>
              <option value="BSD">Bahamian Dollar - B$</option>
              <option value="BHD">Bahraini Dinar - .د.ب</option>
              <option value="BDT">Bangladeshi Taka - ৳</option>
              <option value="BBD">Barbadian Dollar - Bds$</option>
              <option value="BYR">Belarusian Ruble - Br</option>
              <option value="BEF">Belgian Franc - fr</option>
              <option value="BZD">Belize Dollar - $</option>
              <option value="BMD">Bermudan Dollar - $</option>
              <option value="BTN">Bhutanese Ngultrum - Nu.</option>
              <option value="BTC">Bitcoin - ฿</option>
              <option value="BOB">Bolivian Boliviano - Bs.</option>
              <option value="BAM">
                Bosnia-Herzegovina Convertible Mark - KM
              </option>
              <option value="BWP">Botswanan Pula - P</option>
              <option value="BRL">Brazilian Real - R$</option>
              <option value="GBP">British Pound Sterling - £</option>
              <option value="BND">Brunei Dollar - B$</option>
              <option value="BGN">Bulgarian Lev - Лв.</option>
              <option value="BIF">Burundian Franc - FBu</option>
              <option value="KHR">Cambodian Riel - KHR</option>
              <option value="CAD">Canadian Dollar - $</option>
              <option value="CVE">Cape Verdean Escudo - $</option>
              <option value="KYD">Cayman Islands Dollar - $</option>
              <option value="XOF">CFA Franc BCEAO - CFA</option>
              <option value="XAF">CFA Franc BEAC - FCFA</option>
              <option value="XPF">CFP Franc - ₣</option>
              <option value="CLP">Chilean Peso - $</option>
              <option value="CNY">Chinese Yuan - ¥</option>
              <option value="COP">Colombian Peso - $</option>
              <option value="KMF">Comorian Franc - CF</option>
              <option value="CDF">Congolese Franc - FC</option>
              <option value="CRC">Costa Rican ColÃ³n - ₡</option>
              <option value="HRK">Croatian Kuna - kn</option>
              <option value="CUC">Cuban Convertible Peso - $, CUC</option>
              <option value="CZK">Czech Republic Koruna - Kč</option>
              <option value="DKK">Danish Krone - Kr.</option>
              <option value="DJF">Djiboutian Franc - Fdj</option>
              <option value="DOP">Dominican Peso - $</option>
              <option value="XCD">East Caribbean Dollar - $</option>
              <option value="EGP">Egyptian Pound - ج.م</option>
              <option value="ERN">Eritrean Nakfa - Nfk</option>
              <option value="EEK">Estonian Kroon - kr</option>
              <option value="ETB">Ethiopian Birr - Nkf</option>
              <option value="EUR">Euro - €</option>
              <option value="FKP">Falkland Islands Pound - £</option>
              <option value="FJD">Fijian Dollar - FJ$</option>
              <option value="GMD">Gambian Dalasi - D</option>
              <option value="GEL">Georgian Lari - ლ</option>
              <option value="DEM">German Mark - DM</option>
              <option value="GHS">Ghanaian Cedi - GH₵</option>
              <option value="GIP">Gibraltar Pound - £</option>
              <option value="GRD">Greek Drachma - ₯, Δρχ, Δρ</option>
              <option value="GTQ">Guatemalan Quetzal - Q</option>
              <option value="GNF">Guinean Franc - FG</option>
              <option value="GYD">Guyanaese Dollar - $</option>
              <option value="HTG">Haitian Gourde - G</option>
              <option value="HNL">Honduran Lempira - L</option>
              <option value="HKD">Hong Kong Dollar - $</option>
              <option value="HUF">Hungarian Forint - Ft</option>
              <option value="ISK">Icelandic KrÃ³na - kr</option>
              <option value="INR">Indian Rupee - ₹</option>
              <option value="IDR">Indonesian Rupiah - Rp</option>
              <option value="IRR">Iranian Rial - ﷼</option>
              <option value="IQD">Iraqi Dinar - د.ع</option>
              <option value="ILS">Israeli New Sheqel - ₪</option>
              <option value="ITL">Italian Lira - L,£</option>
              <option value="JMD">Jamaican Dollar - J$</option>
              <option value="JPY">Japanese Yen - ¥</option>
              <option value="JOD">Jordanian Dinar - ا.د</option>
              <option value="KZT">Kazakhstani Tenge - лв</option>
              <option value="KES">Kenyan Shilling - KSh</option>
              <option value="KWD">Kuwaiti Dinar - ك.د</option>
              <option value="KGS">Kyrgystani Som - лв</option>
              <option value="LAK">Laotian Kip - ₭</option>
              <option value="LVL">Latvian Lats - Ls</option>
              <option value="LBP">Lebanese Pound - £</option>
              <option value="LSL">Lesotho Loti - L</option>
              <option value="LRD">Liberian Dollar - $</option>
              <option value="LYD">Libyan Dinar - د.ل</option>
              <option value="LTL">Lithuanian Litas - Lt</option>
              <option value="MOP">Macanese Pataca - $</option>
              <option value="MKD">Macedonian Denar - ден</option>
              <option value="MGA">Malagasy Ariary - Ar</option>
              <option value="MWK">Malawian Kwacha - MK</option>
              <option value="MYR">Malaysian Ringgit - RM</option>
              <option value="MVR">Maldivian Rufiyaa - Rf</option>
              <option value="MRO">Mauritanian Ouguiya - MRU</option>
              <option value="MUR">Mauritian Rupee - ₨</option>
              <option value="MXN">Mexican Peso - $</option>
              <option value="MDL">Moldovan Leu - L</option>
              <option value="MNT">Mongolian Tugrik - ₮</option>
              <option value="MAD">Moroccan Dirham - MAD</option>
              <option value="MZM">Mozambican Metical - MT</option>
              <option value="MMK">Myanmar Kyat - K</option>
              <option value="NAD">Namibian Dollar - $</option>
              <option value="NPR">Nepalese Rupee - ₨</option>
              <option value="ANG">Netherlands Antillean Guilder - ƒ</option>
              <option value="TWD">New Taiwan Dollar - $</option>
              <option value="NZD">New Zealand Dollar - $</option>
              <option value="NIO">Nicaraguan CÃ³rdoba - C$</option>
              <option value="NGN">Nigerian Naira - ₦</option>
              <option value="KPW">North Korean Won - ₩</option>
              <option value="NOK">Norwegian Krone - kr</option>
              <option value="OMR">Omani Rial - .ع.ر</option>
              <option value="PKR">Pakistani Rupee - ₨</option>
              <option value="PAB">Panamanian Balboa - B/.</option>
              <option value="PGK">Papua New Guinean Kina - K</option>
              <option value="PYG">Paraguayan Guarani - ₲</option>
              <option value="PEN">Peruvian Nuevo Sol - S/.</option>
              <option value="PHP">Philippine Peso - ₱</option>
              <option value="PLN">Polish Zloty - zł</option>
              <option value="QAR">Qatari Rial - ق.ر</option>
              <option value="RON">Romanian Leu - lei</option>
              <option value="RUB">Russian Ruble - ₽</option>
              <option value="RWF">Rwandan Franc - FRw</option>
              <option value="SVC">Salvadoran ColÃ³n - ₡</option>
              <option value="WST">Samoan Tala - SAT</option>
              <option value="SAR">Saudi Riyal - ﷼</option>
              <option value="RSD">Serbian Dinar - din</option>
              <option value="SCR">Seychellois Rupee - SRe</option>
              <option value="SLL">Sierra Leonean Leone - Le</option>
              <option value="SGD">Singapore Dollar - $</option>
              <option value="SKK">Slovak Koruna - Sk</option>
              <option value="SBD">Solomon Islands Dollar - Si$</option>
              <option value="SOS">Somali Shilling - Sh.so.</option>
              <option value="ZAR">South African Rand - R</option>
              <option value="KRW">South Korean Won - ₩</option>
              <option value="XDR">Special Drawing Rights - SDR</option>
              <option value="LKR">Sri Lankan Rupee - Rs</option>
              <option value="SHP">St. Helena Pound - £</option>
              <option value="SDG">Sudanese Pound - .س.ج</option>
              <option value="SRD">Surinamese Dollar - $</option>
              <option value="SZL">Swazi Lilangeni - E</option>
              <option value="SEK">Swedish Krona - kr</option>
              <option value="CHF">Swiss Franc - CHf</option>
              <option value="SYP">Syrian Pound - LS</option>
              <option value="STD">São Tomé and Príncipe Dobra - Db</option>
              <option value="TJS">Tajikistani Somoni - SM</option>
              <option value="TZS">Tanzanian Shilling - TSh</option>
              <option value="THB">Thai Baht - ฿</option>
              <option value="TOP">Tongan pa anga - $</option>
              <option value="TTD">Trinidad & Tobago Dollar - $</option>
              <option value="TND">Tunisian Dinar - ت.د</option>
              <option value="TRY">Turkish Lira - ₺</option>
              <option value="TMT">Turkmenistani Manat - T</option>
              <option value="UGX">Ugandan Shilling - USh</option>
              <option value="UAH">Ukrainian Hryvnia - ₴</option>
              <option value="AED">United Arab Emirates Dirham - إ.د</option>
              <option value="UYU">Uruguayan Peso - $</option>
              <option value="USD">US Dollar - $</option>
              <option value="UZS">Uzbekistan Som - лв</option>
              <option value="VUV">Vanuatu Vatu - VT</option>
              <option value="VEF">Venezuelan BolÃ­var - Bs</option>
              <option value="VND">Vietnamese Dong - ₫</option>
              <option value="YER">Yemeni Rial - ﷼</option>
              <option value="ZMK">Zambian Kwacha - ZK</option>
            </select>
          </div>
          <button
            type="submit"
            className="h-[46px] w-[372px] rounded-[5px] bg-gradient-to-b from-[#5454FF] to-[#8585E5] p-[3px]"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
