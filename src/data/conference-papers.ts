export interface ConferencePaper {
  id: string;
  code: string;
  title: string;
  authors: string;
  conference: string;
  location: string;
  year: string;
  url?: string;
  featured: boolean;
  isEqualContribution?: boolean;
}

export const conferencePapers: ConferencePaper[] = [
  // 2025 Papers
  {
    id: "c22-2025",
    code: "C22",
    title: "A 353mW 112Gb/s Discrete Multitone Wireline Receiver Datapath With Time-Based ADC in 5nm FinFET",
    authors: "J. Lee, P.-A. Francese, M. Brandli, T. Morf, M. Kossel, S. Jang, G. Kim",
    conference: "International Solid-State Circuits Conference (ISSCC 2025)",
    location: "San-Francisco, California, USA",
    year: "2025",
    url: "https://1drv.ms/b/s!Aq5ju5xHR9-65cU9sHnXXYa5zhaorQ?e=wmtGSj",
    featured: true,
  },

  // 2024 Papers
  {
    id: "c21-2024",
    code: "C21",
    title: "A Discrete Multitone Wireline Transceiver With Clipping Ratio Optimization For ADC-Based High-Speed Serial Links",
    authors: "S. Jang, J. Lee, Y. Choi, D. Kim, G. Kim",
    conference: "21st International SoC Design Conference (ISOCC 2024)",
    location: "Sapporo, Japan",
    year: "2024",
    featured: true,
  },
  {
    id: "c20-2024",
    code: "C20",
    title: "A Discrete Multitone Wireline Transceiver Using Optimal Loading Over Reflective Channel For ADC-Based High-Speed Serial Links",
    authors: "J. Lee, S. Jang, D. Kim, Y. Choi, S. Song, G. Kim",
    conference: "21st International SoC Design Conference (ISOCC 2024)",
    location: "Sapporo, Japan",
    year: "2024",
    featured: false,
  },
  {
    id: "c19-2024",
    code: "C19",
    title: "A 97dB-PSRR 178.4dB-FOMDR calibration-free VCO ADC using a PVT-insensitive frequency locked differential regulation scheme for multi-channel ExG acquisition",
    authors: "S. Lee, T. Seol, G. Kim, M. Song, G. Kim, J.-H. Yoon, A.-K. George, J. Lee",
    conference: "IEEE Symposium on VLSI Technology and Circuits (VLSI 2024)",
    location: "",
    year: "2024",
    featured: false,
  },
  {
    id: "c18-2024",
    code: "C18",
    title: "DMT 3L4W: a 3-lane 4-wire signaling with discrete multitone modulation for high-speed wireline chip-to-chip interconnects",
    authors: "S. Jang, J. Lee, Y. Choi, D. Kim, G. Kim",
    conference: "International Symposium on Circuits and Systems (ISCAS 2024)",
    location: "Singapore",
    year: "2024",
    featured: true,
  },
  {
    id: "c17-2024",
    code: "C17",
    title: "A 4x4 MIMO discrete multitone wireline transceiver with far-end crosstalk cancellation for ADC-based high-speed serial links",
    authors: "J. Lee, S. Jang, Y. Choi, D. Kim, M. Braendli, M. Kossel, A. Ruffino, T. Morf, P.-A. Francese, G. Kim",
    conference: "International Symposium on Circuits and Systems (ISCAS 2024)",
    location: "Singapore",
    year: "2024",
    featured: true,
  },
  {
    id: "c16-2024",
    code: "C16",
    title: "BEE-SLAM: a 65nm 17.96 TOPS/W 97.55%-sparse-activity hybrid mixed-signal/digital multi-agent neuromorphic SLAM accelerator for swarm robotics",
    authors: "J. Lee, D.-G. Choi, M. Song, G. Kim, J.-H. Yoon",
    conference: "Custom Integrated Circuits Conference (CICC)",
    location: "Denver",
    year: "2024",
    featured: false,
  },
  {
    id: "c15-2024",
    code: "C15",
    title: "A study on the effects of power loading profile in discrete multitone wireline serial-data transceiver with fixed-point DSP-SerDes simulator",
    authors: "S. Jang, J. Lee, G. Kim",
    conference: "International Conference on Electronics, Information, and Communication (ICEIC 2024)",
    location: "Taipei, Taiwan",
    year: "2024",
    featured: false,
  },
  {
    id: "c14-2024",
    code: "C14",
    title: "Area optimization of the feed-forward equalizer for ADC-based high-speed wireline receiver using channel characteristics",
    authors: "Y. Choi, S. Jang, G. Kim",
    conference: "International Conference on Electronics, Information, and Communication (ICEIC 2024)",
    location: "Taipei, Taiwan",
    year: "2024",
    featured: false,
  },

  // 2023 Papers
  {
    id: "c13-2023",
    code: "C13",
    title: "An 86.71875GHz RF transceiver for 57.8125Gb/s waveguide links with a CDR-assisted carrier synchronization loop in 28nm",
    authors: "H. Choi, H.-I. Song, H. Won, J. Woo, W. Kwon, H. Jin, K. Kwon, C. Lee, G. Kim, J. Eu, S. Park, H.-M. Bae",
    conference: "European Solid-State Circuits Conference (ESSCIRC 2023)",
    location: "Lisbon, Portugal",
    year: "2023",
    featured: false,
  },
  {
    id: "c12-2023",
    code: "C12",
    title: "A 1V-supply 1.85Vpp-input-range 1kHz-BW 181.9dB-FOMDR 179.4dB-FoMSNDR 2nd-order noise-shaping SAR-ADC with enhanced input impedance in 0.18um CMOS",
    authors: "G. Kim, S. Lee, T. Seol, S. Baik, Y. Shin, G. Kim, J-H. Yoon, A-K. George, J. Lee",
    conference: "International Solid-State Circuits Conference (ISSCC 2023)",
    location: "San-Francisco, California, USA",
    year: "2023",
    featured: true,
  },

  // 2022 Papers
  {
    id: "c11-2022",
    code: "C11",
    title: "Bin-specific quantization in spectral-domain convolutional neural network accelerators",
    authors: "J. Park, J. Lee, G. Kim, and H.-M. Bae",
    conference: "International Conference on Artificial Intelligence Circuits and Systems (AICAS 2022)",
    location: "Incheon, South Korea",
    year: "2022",
    featured: false,
  },

  // 2021 Papers
  {
    id: "c10-2021",
    code: "C10",
    title: "Link bit-error rate requirement analysis for deep neural network accelerators",
    authors: "J. Lee*, G. Kim*, J. Park and H.-M. Bae",
    conference: "International Symposium on Circuits and Systems (ISCAS 2021)",
    location: "Daegu, South Korea",
    year: "2021",
    url: "https://ieeexplore.ieee.org/document/9401112",
    featured: false,
    isEqualContribution: true,
  },

  // 2019 Papers
  {
    id: "c9-2019",
    code: "C9",
    title: "A 4.8pJ/b 56Gb/s ADC-based PAM-4 wireline receiver data-path with cyclic prefix in 14nm FinFET",
    authors: "G. Kim, L. Kull, D. Luu, M. Braendli, C. Menolfi, P.-A. Francese, H. Yueksel, C. Aprile, T. Morf, M. Kossel, A. Cevrero, I. Ozkaya, H. Bae, A. Burg, T. Toifl and Y. Leblebici",
    conference: "Asian Solid-State Circuits Conference (ASSCC 2019)",
    location: "Macao, China",
    year: "2019",
    url: "https://ieeexplore.ieee.org/document/9056940",
    featured: false,
  },
  {
    id: "c8-2019",
    code: "C8",
    title: "Design considerations and performance trade-offs for 56Gb/s discrete multi-tone electrical link",
    authors: "G. Kim, Woohyun Kwon, Thomas Toifl, Yusuf Leblebici, Hyeon-Min Bae",
    conference: "62nd IEEE International Midwest Symposium on Circuits and Systems (MWSCAS 2019)",
    location: "Dallas, TX, USA",
    year: "2019",
    url: "https://ieeexplore.ieee.org/abstract/document/8885299",
    featured: false,
  },
  {
    id: "c7-2019",
    code: "C7",
    title: "A 161mW 56Gb/s ADC-based discrete multitone wireline receiver data-path in 14nm FinFET",
    authors: "G. Kim, L. Kull, D. Luu, M. Braendli, C. Menolfi, P.-A. Francese, H. Yueksel, C. Aprile, T. Morf, M. Kossel, A. Cevrero, I. Ozkaya, A. Burg, T. Toifl and Y. Leblebici",
    conference: "International Solid-State Circuits Conference (ISSCC 2019)",
    location: "San-Francisco, California, USA",
    year: "2019",
    url: "https://ieeexplore.ieee.org/document/8662505",
    featured: true,
  },

  // Before 2019 Papers
  {
    id: "c6-2018",
    code: "C6",
    title: "Parallel implementation technique of digital equalizer for ultra-high-speed wireline receiver",
    authors: "G. Kim, L. Kull, D. Luu, M. Braendli, C. Menolfi, P.-A. Francese, H. Yueksel, C. Aprile, T. Morf, M. Kossel, A. Cevrero, I. Ozkaya, T. Toifl and Y. Leblebici",
    conference: "IEEE International Symposium on Circuits and Systems (ISCAS 2018)",
    location: "Florence, Italy",
    year: "2018",
    url: "https://ieeexplore.ieee.org/document/8350924",
    featured: false,
  },
];
