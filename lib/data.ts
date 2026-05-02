export type UseCase = 'Gaming' | 'Development' | 'Server' | 'Daily Desktop' | 'Privacy/Security' | 'Multimedia Production';
export type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
export type Architecture = 'x86_64' | 'ARM' | 'riscv64' | 'PowerPC';
export type UpdateModel = 'Fixed Release' | 'Rolling Release' | 'Semi-Rolling' | 'Hybrid (Rolling & Fixed)';

export interface HardwareReqs {
  minRam: string;
  minStorage: string;
  cpu: string;
}

export interface ResourceUtilization {
  idleRam: string; // e.g., "500MB"
  idleCpu: string; // e.g., "1-2%"
  notes: string;
}

export interface Distro {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  family: string; // e.g., "Debian-based", "Independent", "Arch-based"
  experienceLevel: ExperienceLevel;
  useCases: UseCase[];
  packageManagers: string[];
  defaultDEs: string[];
  updateModel: UpdateModel;
  hardwareReqs: HardwareReqs;
  resourceUtilization: ResourceUtilization;
  securityPractices: string[];
  communitySupport: string; // e.g., "Vast community, official forums, extensive wiki."
  downloadUrl: string;
  websiteUrl: string;
  icon: string; // simple string for lucide icon mapping or image url
}

export const distributions: Distro[] = [
  {
    id: 'ubuntu',
    name: 'Ubuntu',
    shortDescription: 'The most popular and beginner-friendly Linux distribution.',
    fullDescription: 'Ubuntu is a Debian-based Linux operating system based on free software. It has regular releases and a strong focus on usability and ease of installation.',
    family: 'Debian-based',
    experienceLevel: 'Beginner',
    useCases: ['Daily Desktop', 'Development', 'Server', 'Gaming'],
    packageManagers: ['APT', 'Snap'],
    defaultDEs: ['GNOME'],
    updateModel: 'Fixed Release',
    hardwareReqs: {
      minRam: '4 GB',
      minStorage: '25 GB',
      cpu: '2 GHz dual-core processor or better',
    },
    resourceUtilization: {
      idleRam: '~1.2 GB',
      idleCpu: '1-3%',
      notes: 'Slightly heavier due to GNOME and Snap daemon.',
    },
    securityPractices: [
      'Enable UFW (Uncomplicated Firewall).',
      'Keep the system updated using Unattended Upgrades.',
      'Use AppArmor profiles which are enabled by default.'
    ],
    communitySupport: 'Extremely vast. AskUbuntu, official forums, and community wikis provide answers to almost any issue.',
    downloadUrl: 'https://ubuntu.com/download',
    websiteUrl: 'https://ubuntu.com/',
    icon: 'ubuntu'
  },
  {
    id: 'fedora',
    name: 'Fedora',
    shortDescription: 'Cutting-edge software with a focus on innovation and open source.',
    fullDescription: 'Fedora Linux provides the latest software while maintaining a robust and stable system. It is sponsored by Red Hat and acts as the upstream for Red Hat Enterprise Linux.',
    family: 'Independent / Red Hat',
    experienceLevel: 'Intermediate',
    useCases: ['Development', 'Daily Desktop', 'Server'],
    packageManagers: ['DNF', 'Flatpak'],
    defaultDEs: ['GNOME', 'KDE Plasma', 'XFCE'],
    updateModel: 'Fixed Release', // semi-rollingish feeling due to cutting edge packages
    hardwareReqs: {
      minRam: '4 GB',
      minStorage: '20 GB',
      cpu: '2 GHz dual-core processor or better',
    },
    resourceUtilization: {
      idleRam: '~1.0 GB',
      idleCpu: '1-2%',
      notes: 'Optimized out of the box, provides a very pure GNOME experience.',
    },
    securityPractices: [
      'SELinux is enabled and enforcing by default. Do not disable it; learn to configure it.',
      'Use Firewalld for network traffic management.',
      'Enable secure boot.'
    ],
    communitySupport: 'Excellent official documentation, active Fedora Project community, and Ask Fedora forums.',
    downloadUrl: 'https://fedoraproject.org/workstation/download/',
    websiteUrl: 'https://fedoraproject.org/',
    icon: 'fedora'
  },
  {
    id: 'debian',
    name: 'Debian',
    shortDescription: 'The universal operating system, known for ultimate stability.',
    fullDescription: 'Debian is one of the oldest and most trusted Linux distributions. Its stable branch is rock-solid and forms the basis for many other distros like Ubuntu and Linux Mint.',
    family: 'Independent',
    experienceLevel: 'Intermediate',
    useCases: ['Server', 'Development', 'Daily Desktop'],
    packageManagers: ['APT'],
    defaultDEs: ['GNOME', 'KDE Plasma', 'XFCE', 'LXDE'],
    updateModel: 'Fixed Release',
    hardwareReqs: {
      minRam: '1 GB (depends heavily on DE)',
      minStorage: '10 GB',
      cpu: '1 GHz pentium 4 or better',
    },
    resourceUtilization: {
      idleRam: '~500 MB (with XFCE) / ~1 GB (GNOME)',
      idleCpu: '< 1%',
      notes: 'Extremely lightweight if configured minimally. Resource usage depends almost entirely on the chosen Desktop Environment.',
    },
    securityPractices: [
      'Use the principle of least privilege.',
      'Configure AppArmor.',
      'Disable root SSH login in server deployments.'
    ],
    communitySupport: 'Massive, highly technical community. Extensive Debian Wiki and mailing lists.',
    downloadUrl: 'https://www.debian.org/download',
    websiteUrl: 'https://www.debian.org/',
    icon: 'debian'
  },
  {
    id: 'arch',
    name: 'Arch Linux',
    shortDescription: 'A simple, lightweight distribution that lets you build your system from scratch.',
    fullDescription: 'Arch Linux targets competent Linux users. It uses a rolling release model and the pacman package manager. You start with a command line and install exactly what you need.',
    family: 'Independent',
    experienceLevel: 'Expert',
    useCases: ['Development', 'Daily Desktop', 'Gaming'],
    packageManagers: ['Pacman', 'AUR (via helper)'],
    defaultDEs: ['None (User Choice)'],
    updateModel: 'Rolling Release',
    hardwareReqs: {
      minRam: '512 MB',
      minStorage: '2 GB',
      cpu: 'x86_64 compatible CPU'
    },
    resourceUtilization: {
      idleRam: '~150 MB (TTY only) / Variable based on DE',
      idleCpu: '~0%',
      notes: 'Absolute minimalism. You only run what you explicitly install.',
    },
    securityPractices: [
      'Be cautious with the Arch User Repository (AUR) and review PKGBUILDs.',
      'Regularly read Arch news before performing system updates.',
      'Configure system-wide sandboxing using Firejail or similar.'
    ],
    communitySupport: 'The Arch Wiki is universally acclaimed as the best Linux documentation. Forums are highly technical and expect you to do research first.',
    downloadUrl: 'https://archlinux.org/download/',
    websiteUrl: 'https://archlinux.org/',
    icon: 'arch'
  },
  {
    id: 'linux-mint',
    name: 'Linux Mint',
    shortDescription: 'Produces a modern, elegant and comfortable operating system which is both powerful and easy to use.',
    fullDescription: 'Linux Mint is based on Ubuntu/Debian and is famous for its Cinnamon desktop. It provides full multimedia support out of the box and is generally considered the best transitional OS for Windows users.',
    family: 'Debian/Ubuntu-based',
    experienceLevel: 'Beginner',
    useCases: ['Daily Desktop', 'Multimedia Production'],
    packageManagers: ['APT', 'Flatpak'],
    defaultDEs: ['Cinnamon', 'MATE', 'XFCE'],
    updateModel: 'Fixed Release',
    hardwareReqs: {
      minRam: '2 GB',
      minStorage: '20 GB',
      cpu: 'Dual-core processor'
    },
    resourceUtilization: {
      idleRam: '~800 MB (Cinnamon)',
      idleCpu: '1-2%',
      notes: 'Lighter than standard Ubuntu, highly optimized user experience.',
    },
    securityPractices: [
      'Enable UFW via the GUI firewall configuration tool.',
      'Use the Update Manager to apply security patches regularly.',
      'Utilize Timeshift (pre-installed) for system snapshots before major changes.'
    ],
    communitySupport: 'Very welcoming community, great for beginners. Excellent official forums.',
    downloadUrl: 'https://linuxmint.com/download.php',
    websiteUrl: 'https://linuxmint.com/',
    icon: 'mint'
  },
  {
    id: 'pop-os',
    name: 'Pop!_OS',
    shortDescription: 'Built for STEM and creative professionals who use their computer as a tool to discover and create.',
    fullDescription: 'Pop!_OS by System76 is designed to have a minimal amount of clutter on the desktop to allow the user to focus on work. It excels in out-of-the-box Nvidia driver support and gaming.',
    family: 'Ubuntu-based',
    experienceLevel: 'Beginner',
    useCases: ['Gaming', 'Development', 'Multimedia Production'],
    packageManagers: ['APT', 'Flatpak'],
    defaultDEs: ['COSMIC (GNOME-based)'],
    updateModel: 'Fixed Release',
    hardwareReqs: {
      minRam: '4 GB',
      minStorage: '20 GB',
      cpu: '64-bit architecture'
    },
    resourceUtilization: {
      idleRam: '~1.3 GB',
      idleCpu: '1-3%',
      notes: 'Similar to Ubuntu, but with custom tiling window manager extensions.',
    },
    securityPractices: [
      'Keep system firmware updated automatically via System76 firmware utility.',
      'Use built-in full disk encryption during installation.',
      'Manage app permissions via Pop!_Shop.'
    ],
    communitySupport: 'Strong support from System76, active subreddit, and mattermost chat.',
    downloadUrl: 'https://pop.system76.com/',
    websiteUrl: 'https://pop.system76.com/',
    icon: 'pop'
  },
  {
    id: 'manjaro',
    name: 'Manjaro',
    shortDescription: 'An accessible, friendly, open-source Linux distribution based on Arch Linux.',
    fullDescription: 'Manjaro provides all the benefits of the Arch operating system combined with a focus on user-friendliness and accessibility. It delays Arch updates slightly to ensure stability.',
    family: 'Arch-based',
    experienceLevel: 'Intermediate',
    useCases: ['Gaming', 'Daily Desktop', 'Development'],
    packageManagers: ['Pacman', 'Pamac (AUR, Flatpak, Snap supported)'],
    defaultDEs: ['Plasma', 'XFCE', 'GNOME'],
    updateModel: 'Rolling Release',
    hardwareReqs: {
      minRam: '2 GB',
      minStorage: '30 GB',
      cpu: '2 GHz processor'
    },
    resourceUtilization: {
      idleRam: '~800 MB - 1.2 GB (depending on DE)',
      idleCpu: '1-2%',
      notes: 'Provides specialized hardware detection tools (mhwd) to optimize performance.',
    },
    securityPractices: [
      'Use Pamac instead of manually using AUR helpers if unsure about dependencies.',
      'Keep regular backups as rolling releases can occasionally break.',
      'Enable the firewall during the initial setup wizard.'
    ],
    communitySupport: 'Very active forums bridging the gap between beginner users and Arch power users.',
    downloadUrl: 'https://manjaro.org/download/',
    websiteUrl: 'https://manjaro.org/',
    icon: 'manjaro'
  },
  {
    id: 'opensuse',
    name: 'openSUSE',
    shortDescription: 'The makers\' choice for sysadmins, developers and desktop users.',
    fullDescription: 'openSUSE comes in two forms: Tumbleweed (a stable rolling release) and Leap (a regular-release LTS). It is renowned for its YaST configuration tool and Btrfs snapshot capabilities.',
    family: 'Independent / SUSE',
    experienceLevel: 'Intermediate',
    useCases: ['Server', 'Development', 'Daily Desktop'],
    packageManagers: ['Zypper'],
    defaultDEs: ['KDE Plasma', 'GNOME', 'XFCE'],
    updateModel: 'Hybrid (Rolling & Fixed)',
    hardwareReqs: {
      minRam: '2 GB',
      minStorage: '40 GB',
      cpu: '2 GHz dual-core processor or better'
    },
    resourceUtilization: {
      idleRam: '~1.0 GB',
      idleCpu: '1-2%',
      notes: 'Snapper and Btrfs have a slight overhead but allow instant system rollbacks.',
    },
    securityPractices: [
      'Leverage YaST to manage security policies and AppArmor.',
      'Use Snapper to rollback the system instantly if a malicious update or script runs.',
      'Configure SuSEfirewall2/firewalld carefully for server uses.'
    ],
    communitySupport: 'Excellent official documentation, strong enterprise backing from SUSE, and active forums.',
    downloadUrl: 'https://get.opensuse.org/',
    websiteUrl: 'https://www.opensuse.org/',
    icon: 'opensuse'
  },
  {
    id: 'kali',
    name: 'Kali Linux',
    shortDescription: 'Advanced Penetration Testing and Security Auditing Linux distribution.',
    fullDescription: 'Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing. It comes pre-installed with hundreds of penetration testing programs.',
    family: 'Debian-based',
    experienceLevel: 'Expert',
    useCases: ['Privacy/Security'],
    packageManagers: ['APT'],
    defaultDEs: ['XFCE'],
    updateModel: 'Rolling Release',
    hardwareReqs: {
      minRam: '2 GB',
      minStorage: '20 GB',
      cpu: '1.2 GHz processor'
    },
    resourceUtilization: {
      idleRam: '~600 MB',
      idleCpu: '1%',
      notes: 'Optimized for running security tools rather than general desktop performance.',
    },
    securityPractices: [
      'Do not use Kali as a daily driver. It is a tool, not a general-purpose OS.',
      'Change default credentials immediately upon installation.',
      'Consider running it in a Live USB state with persistence encrypted for maximum security.'
    ],
    communitySupport: 'OffSec documentation, Kali forums, and a vast community of security professionals.',
    downloadUrl: 'https://www.kali.org/get-kali/',
    websiteUrl: 'https://www.kali.org/',
    icon: 'kali'
  },
  {
    id: 'almalinux',
    name: 'AlmaLinux',
    shortDescription: 'An Open Source, community owned and governed, forever-free enterprise Linux distribution.',
    fullDescription: 'AlmaLinux focuses on long-term stability, providing a robust production-grade platform. It was created as a 1:1 binary compatible alternative to RHEL after CentOS shifted to Stream.',
    family: 'Red Hat based',
    experienceLevel: 'Advanced',
    useCases: ['Server'],
    packageManagers: ['DNF', 'RPM'],
    defaultDEs: ['None (CLI)', 'GNOME (if enabled)'],
    updateModel: 'Fixed Release',
    hardwareReqs: {
      minRam: '1.5 GB',
      minStorage: '20 GB',
      cpu: 'x86_64, aarch64, ppc64le, s390x'
    },
    resourceUtilization: {
      idleRam: '~400 MB (CLI only)',
      idleCpu: '~0%',
      notes: 'Extremely efficient as a headless server instance.',
    },
    securityPractices: [
      'Keep SELinux strictly enforcing.',
      'Subscribe to AlmaLinux errata for security patches.',
      'Use minimal installs for servers to reduce the attack surface.'
    ],
    communitySupport: 'Backed by CloudLinux and a strong foundation, highly active sysadmin community.',
    downloadUrl: 'https://almalinux.org/get-almalinux/',
    websiteUrl: 'https://almalinux.org/',
    icon: 'almalinux'
  },
  {
    id: 'zorin',
    name: 'Zorin OS',
    shortDescription: 'Designed to be the ultimate alternative to Windows and macOS.',
    fullDescription: 'Zorin OS is an Ubuntu-based Linux distribution designed especially for newcomers. It features a Windows-like interface and a tool to help you install Windows apps.',
    family: 'Ubuntu-based',
    experienceLevel: 'Beginner',
    useCases: ['Daily Desktop'],
    packageManagers: ['APT', 'Flatpak', 'Snap'],
    defaultDEs: ['Zorin Desktop (GNOME-based)', 'XFCE'],
    updateModel: 'Fixed Release',
    hardwareReqs: {
      minRam: '2 GB (Core) / 1 GB (Lite)',
      minStorage: '15 GB (Core) / 10 GB (Lite)',
      cpu: '1 GHz Dual Core'
    },
    resourceUtilization: {
      idleRam: '~1.0 GB (Core) / ~600 MB (Lite)',
      idleCpu: '1-3%',
      notes: 'Zorin Lite provides an excellent lightweight experience for older hardware.',
    },
    securityPractices: [
      'Enable the firewall through the built-in simple interface.',
      'Keep your Zorin OS up to date with the Software Updater.',
    ],
    communitySupport: 'Excellent support with official documentation, premium support for Pro users, and a welcoming forum.',
    downloadUrl: 'https://zorin.com/os/download/',
    websiteUrl: 'https://zorin.com/',
    icon: 'zorin'
  },
  {
    id: 'elementary',
    name: 'elementary OS',
    shortDescription: 'The thoughtful, capable, and ethical replacement for Windows and macOS.',
    fullDescription: 'elementary OS is a Linux distribution based on Ubuntu that focuses strongly on non-technical users. It has a custom desktop environment called Pantheon and strict design guidelines.',
    family: 'Ubuntu-based',
    experienceLevel: 'Beginner',
    useCases: ['Daily Desktop', 'Multimedia Production'],
    packageManagers: ['APT', 'Flatpak'],
    defaultDEs: ['Pantheon'],
    updateModel: 'Fixed Release',
    hardwareReqs: {
      minRam: '4 GB',
      minStorage: '32 GB',
      cpu: 'Recent Intel i3 or comparable dual-core 64-bit'
    },
    resourceUtilization: {
      idleRam: '~1.2 GB',
      idleCpu: '1-3%',
      notes: 'Pantheon is hardware accelerated, so a decent GPU helps performance.',
    },
    securityPractices: [
      'Download curated applications from the AppCenter which are strictly reviewed.',
      'Manage application permissions individually using the simple Privacy settings.'
    ],
    communitySupport: 'Active Stack Exchange community and highly curated official documentation.',
    downloadUrl: 'https://elementary.io/',
    websiteUrl: 'https://elementary.io/',
    icon: 'elementary'
  },
  {
    id: 'mx-linux',
    name: 'MX Linux',
    shortDescription: 'A midweight OS designed to combine an elegant desktop with simple configuration.',
    fullDescription: 'MX Linux is a cooperative venture between the antiX and former MEPIS communities, using Debian Stable as its base. It includes custom "MX Tools" that make system management incredibly easy.',
    family: 'Debian-based',
    experienceLevel: 'Intermediate',
    useCases: ['Daily Desktop'],
    packageManagers: ['APT'],
    defaultDEs: ['XFCE', 'KDE Plasma', 'Fluxbox'],
    updateModel: 'Fixed Release',
    hardwareReqs: {
      minRam: '2 GB',
      minStorage: '20 GB',
      cpu: 'Modern i686/amd64 processor'
    },
    resourceUtilization: {
      idleRam: '~600 MB',
      idleCpu: '1-2%',
      notes: 'Very lightweight without sacrificing functionality or looks out-of-the-box.',
    },
    securityPractices: [
      'Use MX Tools to easily manage backups, snapshots, and boot options.',
      'Rely on Debian Stable updates for excellent security hygiene.'
    ],
    communitySupport: 'One of the most active and supportive forums in the Linux community today.',
    downloadUrl: 'https://mxlinux.org/download-links/',
    websiteUrl: 'https://mxlinux.org/',
    icon: 'mx'
  },
  {
    id: 'endeavouros',
    name: 'EndeavourOS',
    shortDescription: 'A terminal-centric distro with a vibrant community, based on Arch Linux.',
    fullDescription: 'EndeavourOS provides a friendly installer and a welcoming community for Arch Linux. It keeps the system as close to pure Arch as possible while making the initial setup much easier.',
    family: 'Arch-based',
    experienceLevel: 'Intermediate',
    useCases: ['Development', 'Gaming', 'Daily Desktop'],
    packageManagers: ['Pacman', 'yay (AUR)'],
    defaultDEs: ['XFCE', 'KDE Plasma', 'GNOME'],
    updateModel: 'Rolling Release',
    hardwareReqs: {
      minRam: '4 GB',
      minStorage: '15 GB',
      cpu: '64-bit AMD/Intel processor'
    },
    resourceUtilization: {
      idleRam: '~700 MB (with XFCE)',
      idleCpu: '1%',
      notes: 'No bloatware is installed by default, so it runs very fast.',
    },
    securityPractices: [
      'Regularly review the EndeavourOS forum for update warnings.',
      'Limit reliance on unmaintained AUR packages by checking the PKGBUILDs.'
    ],
    communitySupport: 'Exceptional forums that pride themselves on being welcoming to questions and providing detailed technical help.',
    downloadUrl: 'https://endeavouros.com/latest-release/',
    websiteUrl: 'https://endeavouros.com/',
    icon: 'endeavour'
  },
  {
    id: 'garuda',
    name: 'Garuda Linux',
    shortDescription: 'A beautiful Arch-based rolling release distro, focused on performance and gaming.',
    fullDescription: 'Garuda comes with Btrfs as the default filesystem, utilizing zram, and a customized Zen kernel for maximum performance. It features a stunning "Dragonized" desktop layout.',
    family: 'Arch-based',
    experienceLevel: 'Intermediate',
    useCases: ['Gaming', 'Daily Desktop'],
    packageManagers: ['Pacman', 'Pamac (GUI)'],
    defaultDEs: ['KDE Plasma (Dragonized)', 'GNOME', 'XFCE'],
    updateModel: 'Rolling Release',
    hardwareReqs: {
      minRam: '4 GB (8 GB recommended)',
      minStorage: '40 GB',
      cpu: '64-bit multi-core processor'
    },
    resourceUtilization: {
      idleRam: '~1.5 GB to 2.5 GB',
      idleCpu: '2-5%',
      notes: 'Considerably heavier than pure Arch due to effects, pre-installed gaming tools, and performance tweaks.',
    },
    securityPractices: [
      'Use the integrated Garuda Assistant tool to manage Btrfs snapshots and system updates safely.',
      'Configure the firewall which is usually enabled by default.'
    ],
    communitySupport: 'Active forums heavily tailored towards gaming and fixing configuration issues with high-end hardware.',
    downloadUrl: 'https://garudalinux.org/downloads.html',
    websiteUrl: 'https://garudalinux.org/',
    icon: 'garuda'
  },
  {
    id: 'kde-neon',
    name: 'KDE Neon',
    shortDescription: 'The latest KDE Plasma desktop running on top of a stable Ubuntu LTS base.',
    fullDescription: 'KDE Neon is not quite a standard distribution, but rather a fast-updating software repository on an Ubuntu LTS base. It provides users with the absolute newest KDE software as soon as it releases.',
    family: 'Ubuntu-based',
    experienceLevel: 'Intermediate',
    useCases: ['Daily Desktop', 'Development'],
    packageManagers: ['APT', 'Flatpak', 'Snap'],
    defaultDEs: ['KDE Plasma'],
    updateModel: 'Hybrid (Rolling & Fixed)',
    hardwareReqs: {
      minRam: '4 GB',
      minStorage: '25 GB',
      cpu: '64-bit processor'
    },
    resourceUtilization: {
      idleRam: '~900 MB',
      idleCpu: '1-2%',
      notes: 'KDE Plasma is much lighter than historically assumed, offering excellent modern performance.',
    },
    securityPractices: [
      'Rely on the underlying Ubuntu LTS for core system and security updates.',
      'Utilize Plasma-Discover to manage flatpak/snap permissions.'
    ],
    communitySupport: 'Tied heavily to the KDE community itself; great for bug reporting directly to upstream KDE developers.',
    downloadUrl: 'https://neon.kde.org/download',
    websiteUrl: 'https://neon.kde.org/',
    icon: 'neon'
  },
  {
    id: 'rocky',
    name: 'Rocky Linux',
    shortDescription: 'A community enterprise operating system designed to be 100% bug-for-bug compatible with Red Hat Enterprise Linux.',
    fullDescription: 'Rocky Linux was founded by one of the original co-founders of CentOS as a true spiritual successor to CentOS after Red Hat shifted focus. It provides immense stability for servers.',
    family: 'Red Hat based',
    experienceLevel: 'Advanced',
    useCases: ['Server'],
    packageManagers: ['DNF', 'RPM'],
    defaultDEs: ['None (CLI)'],
    updateModel: 'Fixed Release',
    hardwareReqs: {
      minRam: '2 GB',
      minStorage: '20 GB',
      cpu: 'x86_64 or aarch64'
    },
    resourceUtilization: {
      idleRam: '~400 MB (CLI only)',
      idleCpu: '~0%',
      notes: 'Excellent server footprint. Scales effortlessly.',
    },
    securityPractices: [
      'Maintain SELinux in Enforcing mode at all times.',
      'Install only from official EPEL and Rocky repos where possible.',
      'Use firewalld to tightly restrict incoming network traffic.'
    ],
    communitySupport: 'Backed by the Rocky Enterprise Software Foundation (RESF) with a massive enterprise community.',
    downloadUrl: 'https://rockylinux.org/download',
    websiteUrl: 'https://rockylinux.org/',
    icon: 'rocky'
  },
  {
    id: 'nixos',
    name: 'NixOS',
    shortDescription: 'A Linux distribution built on top of the Nix package manager, emphasizing reproducibility.',
    fullDescription: 'NixOS uses a declarative configuration model. The entire OS, including the kernel, applications, and system packages, is built by the Nix package manager from a configuration file.',
    family: 'Independent',
    experienceLevel: 'Expert',
    useCases: ['Development', 'Server', 'Daily Desktop'],
    packageManagers: ['Nix'],
    defaultDEs: ['KDE Plasma', 'GNOME'],
    updateModel: 'Hybrid (Rolling & Fixed)',
    hardwareReqs: {
      minRam: '2 GB for CLI, 4GB+ for GUI',
      minStorage: '20 GB (Requires more space over time for generations)',
      cpu: 'x86_64 or aarch64'
    },
    resourceUtilization: {
      idleRam: '~1.0 GB',
      idleCpu: '1%',
      notes: 'Package store grows significantly over time unless old generations are garbage collected.',
    },
    securityPractices: [
      'Easily rollback to a previously known secure configuration using generations.',
      'Configure system services deterministically via configuration.nix rather than manual tweaking.'
    ],
    communitySupport: 'Highly technical and rapidly growing community of developers. Extensive NixOS manual and wiki.',
    downloadUrl: 'https://nixos.org/download.html',
    websiteUrl: 'https://nixos.org/',
    icon: 'nixos'
  },
  {
    id: 'void',
    name: 'Void Linux',
    shortDescription: 'An independent, rolling-release OS built from scratch, using runit as the init system.',
    fullDescription: 'Void is distinguished by its use of the runit init system (instead of systemd) and the XBPS package manager. It is simple, insanely fast, and offers a strict "no-nonsense" approach.',
    family: 'Independent',
    experienceLevel: 'Advanced',
    useCases: ['Development', 'Server', 'Daily Desktop'],
    packageManagers: ['XBPS'],
    defaultDEs: ['XFCE', 'None'],
    updateModel: 'Rolling Release',
    hardwareReqs: {
      minRam: '256 MB',
      minStorage: '5 GB',
      cpu: 'i686, x86_64, ARM'
    },
    resourceUtilization: {
      idleRam: '~100 MB (CLI) / ~300 MB (XFCE)',
      idleCpu: '< 1%',
      notes: 'One of the fastest booting and lightest distributions available today.',
    },
    securityPractices: [
      'Use the restricted void-packages repository to audit software.',
      'Be comfortable configuring services and firewall rules manually via terminal.'
    ],
    communitySupport: 'Tight-knit advanced community, good handbook, and subreddit.',
    downloadUrl: 'https://voidlinux.org/download/',
    websiteUrl: 'https://voidlinux.org/',
    icon: 'void'
  },
  {
    id: 'gentoo',
    name: 'Gentoo Linux',
    shortDescription: 'A highly flexible, source-based Linux distribution.',
    fullDescription: 'Gentoo gives you complete control over your system by compiling all software from source on your machine, optimizing it specifically for your hardware utilizing the Portage package manager.',
    family: 'Independent',
    experienceLevel: 'Expert',
    useCases: ['Development', 'Server'],
    packageManagers: ['Portage'],
    defaultDEs: ['None (User Choice)'],
    updateModel: 'Rolling Release',
    hardwareReqs: {
      minRam: '2 GB (Compilation requires more RAM)',
      minStorage: '20 GB',
      cpu: 'Any supported architecture (fast CPU recommended for compiling)'
    },
    resourceUtilization: {
      idleRam: 'Variable (Depends strictly on user compile options)',
      idleCpu: '0%',
      notes: 'Can be incredibly minimal or heavy based entirely on the compiler flags (USE flags) you set.',
    },
    securityPractices: [
      'Use hardened Gentoo profiles to compile a security-first system.',
      'Regularly review the Gentoo Security Advisories (GLSA).'
    ],
    communitySupport: 'The ultimate repository for Linux knowledge; highly revered wiki and IRC channels.',
    downloadUrl: 'https://www.gentoo.org/downloads/',
    websiteUrl: 'https://www.gentoo.org/',
    icon: 'gentoo'
  },
  {
    id: 'alpine',
    name: 'Alpine Linux',
    shortDescription: 'A security-oriented, lightweight Linux distribution based on musl libc and busybox.',
    fullDescription: 'Alpine is famous for being incredibly tiny, making it the industry standard for Docker containers and minimal servers. It does not use GNU utilities or systemd.',
    family: 'Independent',
    experienceLevel: 'Expert',
    useCases: ['Server', 'Privacy/Security', 'Development'],
    packageManagers: ['APK'],
    defaultDEs: ['None (CLI)'],
    updateModel: 'Hybrid (Rolling & Fixed)',
    hardwareReqs: {
      minRam: '128 MB',
      minStorage: '1 GB',
      cpu: 'x86, x86_64, ARM'
    },
    resourceUtilization: {
      idleRam: '~50 MB',
      idleCpu: '0%',
      notes: 'An absolute minimum footprint OS, designed for containers and routers.',
    },
    securityPractices: [
      'PaX and secpatch are included in the default kernel.',
      'All user-space binaries are compiled as Position Independent Executables (PIE) with stack smashing protection.'
    ],
    communitySupport: 'Extensive wiki, highly utilized in the DevOps and containerization communities.',
    downloadUrl: 'https://alpinelinux.org/downloads/',
    websiteUrl: 'https://alpinelinux.org/',
    icon: 'alpine'
  },
  {
    id: 'solus',
    name: 'Solus',
    shortDescription: 'An independently developed desktop operating system aiming to provide a cohesive experience.',
    fullDescription: 'Solus is designed exclusively for personal computing—no server edition exists. It curates a stable rolling release model and introduced the popular Budgie desktop environment.',
    family: 'Independent',
    experienceLevel: 'Beginner',
    useCases: ['Daily Desktop', 'Gaming'],
    packageManagers: ['eopkg'],
    defaultDEs: ['Budgie', 'GNOME', 'KDE Plasma', 'MATE'],
    updateModel: 'Rolling Release',
    hardwareReqs: {
      minRam: '2 GB',
      minStorage: '10 GB',
      cpu: '64-bit processor'
    },
    resourceUtilization: {
      idleRam: '~800 MB',
      idleCpu: '1-2%',
      notes: 'Budgie desktop on Solus provides a highly optimized, fast, and cohesive desktop experience.',
    },
    securityPractices: [
      'Update frequency managed by a curated rolling release, preventing severe breakages.',
      'Use the built-in Software Center to manage safe package installations.'
    ],
    communitySupport: 'Strong forum-based community that focuses entirely on desktop computing problems.',
    downloadUrl: 'https://getsol.us/download/',
    websiteUrl: 'https://getsol.us/',
    icon: 'solus'
  }
];

export const desktopEnvironments = [
  {
    name: 'GNOME',
    description: 'Modern, streamlined, and reliant on a unique workflow utilizing a Dash and activities overview.',
    weight: 'Heavy',
    idealFor: ['Touchscreens', 'Modern displays', 'Keyboard-centric workflows']
  },
  {
    name: 'KDE Plasma',
    description: 'Highly customizable, classic desktop paradigm but incredibly modern looking. Feature-rich.',
    weight: 'Medium',
    idealFor: ['Windows converts', 'Tinkerers', 'High-end hardware']
  },
  {
    name: 'XFCE',
    description: 'Lightweight, stable, and traditional. Excellent for older hardware or minimalists.',
    weight: 'Light',
    idealFor: ['Older PCs', 'Servers with GUI needs', 'Minimalists']
  },
  {
    name: 'Cinnamon',
    description: 'Developed by Linux Mint, offers a traditional bottom-panel layout that is very familiar to Windows users.',
    weight: 'Medium',
    idealFor: ['Windows converts', 'Beginners']
  },
  {
    name: 'MATE',
    description: 'A continuation of the classic GNOME 2 interface. Fast and traditional.',
    weight: 'Light-Medium',
    idealFor: ['Older hardware', 'Traditionalists']
  },
  {
    name: 'Window Managers (i3, sway, bspwm)',
    description: 'Keyboard-driven tiling window managers without a full desktop suite. Absolute minimalism.',
    weight: 'Extremely Light',
    idealFor: ['Developers', 'Power Users', 'Maximum screen space']
  }
];
