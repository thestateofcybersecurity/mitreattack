import { Scenario } from '@/types';

const scenarios: Scenario[] = [
{
    id: 1,
    name: "Reconnaissance",
    description: "Gathering information is key to understanding your target. Which reconnaissance technique will you use?",
    phase: 'reconnaissance',
    choices: [
      {
        id: 'T1595',
        method: "Active Scanning",
        description: "Adversaries may execute active reconnaissance scans to gather information that can be used during targeting. Active scans involve probing victim infrastructure via network traffic.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1595.001',
        method: "Scanning IP Blocks",
        description: "Adversaries may scan victim IP blocks to gather information that can be used during targeting. Public IP addresses may be allocated to organizations by block.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1595.002',
        method: "Vulnerability Scanning",
        description: "Adversaries may scan victims for vulnerabilities that can be used during targeting. Vulnerability scans typically check if the configuration of a target host/application aligns with a specific exploit.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1595.003',
        method: "Wordlist Scanning",
        description: "Adversaries may iteratively probe infrastructure using brute-forcing and crawling techniques, often to identify content and infrastructure rather than valid credentials.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1592',
        method: "Gather Victim Host Information",
        description: "Adversaries may gather information about the victim's hosts, such as administrative data (name, assigned IP, functionality) or specifics about its configuration (OS, language, etc.).",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1592.001',
        method: "Gather Victim Host Hardware Information",
        description: "Adversaries may gather information about the victim's host hardware, such as types and versions of hardware on specific hosts, which might indicate defensive protections.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1592.002',
        method: "Gather Victim Host Software Information",
        description: "Adversaries may gather information about the victim's host software, such as types and versions of installed software, which might indicate defensive protections.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1592.003',
        method: "Gather Victim Host Firmware Information",
        description: "Adversaries may gather information about the victim's host firmware, such as type and versions on specific hosts, to infer more details about host configurations and purposes.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1592.004',
        method: "Gather Victim Client Configuration Information",
        description: "Adversaries may gather information about the victim's client configurations, including OS version, virtualization, architecture, language, and time zone.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1589',
        method: "Gather Victim Identity Information",
        description: "Adversaries may gather information about the victim's identity, including personal data, credentials, and multi-factor authentication configurations.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1589.001',
        method: "Gather Victim Credentials",
        description: "Adversaries may gather credentials that can be used during targeting, potentially exploiting the tendency of users to reuse passwords across personal and business accounts.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1589.002',
        method: "Gather Victim Email Addresses",
        description: "Adversaries may gather email addresses that can be used during targeting, exploiting public-facing email infrastructure and addresses for employees.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1589.003',
        method: "Gather Victim Employee Names",
        description: "Adversaries may gather employee names that can be used during targeting, potentially deriving email addresses and guiding other reconnaissance efforts.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1590',
        method: "Gather Victim Network Information",
        description: "Adversaries may gather information about the victim's networks, including administrative data, IP ranges, domain names, and network topology.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1590.001',
        method: "Gather Victim Domain Properties",
        description: "Adversaries may gather information about the victim's network domains, including administrative data and actionable information such as contacts and name servers.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1590.002',
        method: "Gather Victim DNS Information",
        description: "Adversaries may gather information about the victim's DNS, including records that outline addressing for subdomains, mail servers, and other hosts.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1590.003',
        method: "Gather Victim Network Trust Dependencies",
        description: "Adversaries may gather information about the victim's network trust dependencies, including connected organizations with potentially elevated network access.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1590.004',
        method: "Gather Victim Network Topology",
        description: "Adversaries may gather information about the victim's network topology, including the physical and/or logical arrangement of both external-facing and internal network environments.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1590.005',
        method: "Gather Victim IP Addresses",
        description: "Adversaries may gather the victim's IP addresses to derive other details about the victim, such as organizational size, physical location, and infrastructure hosting.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1590.006',
        method: "Gather Victim Network Security Appliance Information",
        description: "Adversaries may gather information about the victim's network security appliances, including firewalls, content filters, and proxies.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1591',
        method: "Gather Victim Organization Information",
        description: "Adversaries may gather information about the victim's organization, including business operations and roles of key employees.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1591.001',
        method: "Determine Victim Physical Locations",
        description: "Adversaries may gather information about the victim's physical locations, such as where key resources and infrastructure are housed.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1591.002',
        method: "Gather Victim Business Relationships",
        description: "Adversaries may gather information about the victim's business relationships, revealing supply chains and shipment paths for the victim’s hardware and software resources.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
    id: 'T1591.003',
        method: "Identify Victim Business Tempo",
        description: "Adversaries may gather information about the victim's business tempo, including operational hours, purchase times, and shipment dates.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1591.004',
        method: "Identify Victim Roles",
        description: "Adversaries may gather information about roles within the victim organization, including key personnel and what data/resources they have access to.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1598',
        method: "Phishing for Information",
        description: "Adversaries may send phishing messages to elicit sensitive information that can be used during targeting, such as credentials or other actionable information.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1598.001',
        method: "Spearphishing via Service",
        description: "Adversaries may send spearphishing messages via third-party services to elicit sensitive information, often involving social engineering techniques.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1598.002',
        method: "Spearphishing via Attachment",
        description: "Adversaries may send spearphishing messages with a malicious attachment to elicit sensitive information, often involving social engineering techniques.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1598.003',
        method: "Spearphishing via Link",
        description: "Adversaries may send spearphishing messages with a malicious link to elicit sensitive information, often involving social engineering techniques.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1598.004',
        method: "Spearphishing via Voice",
        description: "Adversaries may use voice communications to elicit sensitive information, often involving social engineering techniques.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1597',
        method: "Search Closed Sources",
        description: "Adversaries may search and gather information about victims from closed sources that can be used during targeting, such as private databases or dark web markets.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1597.001',
        method: "Search Threat Intel Vendors",
        description: "Adversaries may search private data from threat intelligence vendors for information that can be used during targeting, such as trends regarding breaches.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1597.002',
        method: "Purchase Technical Data",
        description: "Adversaries may purchase technical information about victims from private databases or dark web markets, which can be used during targeting.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1596',
        method: "Search Open Technical Databases",
        description: "Adversaries may search freely available technical databases for information about victims that can be used during targeting, such as domain registrations and network data.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1596.001',
        method: "Search DNS/Passive DNS",
        description: "Adversaries may search DNS data for information about victims, including name servers and records that outline addressing for subdomains and mail servers.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1596.002',
        method: "Search WHOIS",
        description: "Adversaries may search public WHOIS data for information about victims, such as assigned IP blocks, contact information, and DNS nameservers.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1596.003',
        method: "Search Digital Certificates",
        description: "Adversaries may search public digital certificate data for information about victims, such as those used for HTTPS SSL/TLS communications.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1596.004',
        method: "Search CDNs",
        description: "Adversaries may search content delivery network (CDN) data about victims, which may reveal how content is hosted and distributed.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1596.005',
        method: "Search Public Scan Databases",
        description: "Adversaries may search within public scan databases for information about victims, such as active IP addresses, hostnames, and open ports.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1593',
        method: "Search Open Websites/Domains",
        description: "Adversaries may search freely available websites and/or domains for information about victims, such as social media, news sites, or business operations.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1593.001',
        method: "Search Social Media",
        description: "Adversaries may search social media for information about victims, such as business announcements and employee information.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1593.002',
        method: "Use Search Engines",
        description: "Adversaries may use search engines to collect information about victims, employing specialized syntax to search for specific content.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1593.003',
        method: "Search Public Code Repositories",
        description: "Adversaries may search public code repositories for information about victims, such as code hosted on GitHub, GitLab, or BitBucket.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1594',
        method: "Search Victim-Owned Websites",
        description: "Adversaries may search websites owned by the victim for information, including names of departments, physical locations, and key employees.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      }
    ]
  },
{
    id: 2,
    name: "Resource Development",
    description: "Developing or acquiring the necessary resources is crucial for a successful operation. What will you do to prepare?",
    phase: 'resourceDevelopment',
    choices: [
      {
        id: 'T1650',
        method: "Acquire Access",
        description: "Adversaries may purchase or otherwise acquire existing access to a target system or network, often through online services or initial access brokers.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1583',
        method: "Acquire Infrastructure",
        description: "Adversaries may buy, lease, rent, or obtain infrastructure such as physical or cloud servers, domains, and third-party web services for their operations.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1583.001',
        method: "Acquire Domains",
        description: "Adversaries may acquire domains that can be used during targeting. Domains are human-readable names used to represent one or more IP addresses.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1583.002',
        method: "Set Up DNS Server",
        description: "Adversaries may set up their own DNS servers to be used during targeting, enabling the use of DNS traffic for various tasks including Command and Control.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1583.003',
        method: "Rent Virtual Private Server",
        description: "Adversaries may rent Virtual Private Servers (VPSs) that can be used during targeting, making it difficult to physically tie back operations to them.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1583.004',
        method: "Acquire Physical Server",
        description: "Adversaries may buy, lease, rent, or obtain physical servers to stage, launch, and execute operations, or use them for post-compromise activities.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1583.005',
        method: "Acquire Botnet",
        description: "Adversaries may buy, lease, or rent a network of compromised systems (botnet) that can be used during targeting, often for large-scale operations.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1583.006',
        method: "Register Web Services",
        description: "Adversaries may register for web services that can be used during targeting, making it difficult to physically tie back operations to them.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1583.007',
        method: "Acquire Serverless Infrastructure",
        description: "Adversaries may purchase and configure serverless cloud infrastructure to be used during targeting, making it more difficult to attribute operations back to them.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1583.008',
        method: "Purchase Malvertising",
        description: "Adversaries may purchase online advertisements that can be abused to distribute malware to victims, often targeting specific audiences.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1586',
        method: "Compromise Accounts",
        description: "Adversaries may compromise accounts with services that can be used during targeting, such as social media, email, or cloud accounts.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1586.001',
        method: "Compromise Social Media Accounts",
        description: "Adversaries may compromise social media accounts to build a persona that can be used during targeting, leveraging existing trust in the compromised persona.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1586.002',
        method: "Compromise Email Accounts",
        description: "Adversaries may compromise email accounts to further their operations, such as for Phishing campaigns or infrastructure acquisition.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1586.003',
        method: "Compromise Cloud Accounts",
        description: "Adversaries may compromise cloud accounts to leverage cloud storage services or to develop capabilities without managing their own servers.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584',
        method: "Compromise Infrastructure",
        description: "Adversaries may compromise third-party infrastructure that can be used during targeting, such as physical servers, domains, or web services.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.001',
        method: "Hijack Domains",
        description: "Adversaries may hijack domains and/or subdomains to be used during targeting, often by exploiting gaps in domain registration processes.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.002',
        method: "Compromise DNS Server",
        description: "Adversaries may compromise third-party DNS servers to be used during targeting, enabling the use of DNS traffic for various tasks including Command and Control.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.003',
        method: "Compromise Virtual Private Server",
        description: "Adversaries may compromise third-party Virtual Private Servers (VPSs) to be used during targeting, making it difficult to physically tie back operations to themselves.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.004',
        method: "Compromise Server",
        description: "Adversaries may compromise third-party servers to be used during targeting, often to stage, launch, and execute operations.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.005',
        method: "Compromise Botnet",
        description: "Adversaries may compromise numerous third-party systems to form a botnet that can be used during targeting, often for large-scale operations.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.006',
        method: "Compromise Web Services",
        description: "Adversaries may compromise access to third-party web services to be used during targeting, making it difficult to physically tie back operations to themselves.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.007',
        method: "Compromise Serverless Infrastructure",
        description: "Adversaries may compromise serverless cloud infrastructure to be used during targeting, making it more difficult to attribute operations back to them.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1584.008',
        method: "Compromise Network Devices",
        description: "Adversaries may compromise third-party network devices, such as SOHO routers, to be used during targeting, leveraging these devices to support additional targeting.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1587',
        method: "Develop Capabilities",
        description: "Adversaries may build capabilities that can be used during targeting, such as developing malware, exploits, or self-signed certificates.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1587.001',
        method: "Develop Malware",
        description: "Adversaries may develop malware and malware components that can be used during targeting, creating a means for maintaining control of remote machines.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1587.002',
        method: "Create Code Signing Certificates",
        description: "Adversaries may create self-signed code signing certificates that can be used during targeting, providing a level of authenticity for their software.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1587.003',
        method: "Create Digital Certificates",
        description: "Adversaries may create self-signed SSL/TLS certificates that can be used during targeting, enabling secure communications with their infrastructure.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1587.004',
        method: "Develop Exploits",
        description: "Adversaries may develop exploits that can be used during targeting, taking advantage of vulnerabilities to cause unintended behavior in systems.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1585',
        method: "Establish Accounts",
        description: "Adversaries may create and cultivate accounts with services that can be used during targeting, often building personas to further operations.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1585.001',
        method: "Create Social Media Accounts",
        description: "Adversaries may create and cultivate social media accounts that can be used during targeting, building personas that appear legitimate.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1585.002',
        method: "Create Email Accounts",
        description: "Adversaries may create email accounts that can be used during targeting, leveraging them for phishing or infrastructure acquisition.",
        baseDifficulty: 5,  // Very Easy difficulty
        successRateModifier: 0.9,
      },
      {
        id: 'T1585.003',
        method: "Create Cloud Accounts",
        description: "Adversaries may create accounts with cloud providers that can be used during targeting, enabling them to leverage cloud services for operations.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1588',
        method: "Obtain Capabilities",
        description: "Adversaries may buy and/or steal capabilities that can be used during targeting, such as malware, exploits, and digital certificates.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1588.001',
        method: "Obtain Malware",
        description: "Adversaries may buy, steal, or download malware that can be used during targeting, obtaining tools for remote control and evading defenses.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1588.002',
        method: "Obtain Tools",
        description: "Adversaries may buy, steal, or download software tools that can be used during targeting, including commercial software and red teaming tools.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1588.003',
        method: "Obtain Code Signing Certificates",
        description: "Adversaries may buy and/or steal code signing certificates that can be used during targeting, providing a level of authenticity for their software.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1588.004',
        method: "Obtain Digital Certificates",
        description: "Adversaries may buy and/or steal SSL/TLS certificates that can be used during targeting, enabling secure communications with their infrastructure.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1588.005',
        method: "Obtain Exploits",
        description: "Adversaries may buy, steal, or download exploits that can be used during targeting, taking advantage of vulnerabilities in systems.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1588.006',
        method: "Obtain Vulnerability Information",
        description: "Adversaries may acquire information about vulnerabilities that can be used during targeting, often through open databases or closed vulnerability reports.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1588.007',
        method: "Obtain Artificial Intelligence Tools",
        description: "Adversaries may obtain access to generative AI tools, such as large language models (LLMs), to aid in various malicious tasks during targeting.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1608',
        method: "Stage Capabilities",
        description: "Adversaries may upload, install, or otherwise set up capabilities that can be used during targeting, often staging them on compromised or rented infrastructure.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1608.001',
        method: "Upload Malware",
        description: "Adversaries may upload malware to third-party or adversary-controlled infrastructure to make it accessible during targeting.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1608.002',
        method: "Upload Tools",
        description: "Adversaries may upload tools to third-party or adversary-controlled infrastructure to make them accessible during targeting.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1608.003',
        method: "Install Digital Certificates",
        description: "Adversaries may install SSL/TLS certificates on servers to enable secure communications during targeting.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1608.004',
        method: "Prepare Drive-by Target",
        description: "Adversaries may prepare an operational environment to infect systems that visit a website over the normal course of browsing.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1608.005',
        method: "Set Up Link Target",
        description: "Adversaries may put in place resources that are referenced by a link that can be used during targeting, often as part of a spearphishing campaign.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1608.006',
        method: "Conduct SEO Poisoning",
        description: "Adversaries may poison mechanisms that influence search engine optimization (SEO) to lure staged capabilities towards potential victims.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      }
    ]
  },
 {
    id: 3,
    name: "Initial Access",
    description: "Your operation begins with gaining initial access to the target system. Choose your method of entry.",
    phase: 'initialAccess',
    choices: [
      {
        id: 'T1659',
        method: "Content Injection",
        description: "Adversaries may inject malicious content into systems through online network traffic, enabling continuous communication and potential exploitation.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1189',
        method: "Drive-by Compromise",
        description: "Adversaries may gain access to a system through a user visiting a compromised website over the normal course of browsing.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1190',
        method: "Exploit Public-Facing Application",
        description: "Adversaries may exploit a vulnerability in an Internet-facing application to gain initial access to the target network.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1133',
        method: "External Remote Services",
        description: "Adversaries may leverage external-facing remote services, such as VPNs or RDP, to gain initial access to a network.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1200',
        method: "Hardware Additions",
        description: "Adversaries may introduce malicious hardware, such as network devices or computer accessories, into a system to gain access.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1566',
        method: "Phishing",
        description: "Adversaries may send phishing messages to gain access to victim systems through electronically delivered social engineering.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1566.001',
        method: "Spearphishing Attachment",
        description: "Adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1566.002',
        method: "Spearphishing Link",
        description: "Adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1566.003',
        method: "Spearphishing via Service",
        description: "Adversaries may send spearphishing messages via third-party services in an attempt to gain access to victim systems.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1566.004',
        method: "Spearphishing Voice",
        description: "Adversaries may use voice communications to manipulate a user into providing access to systems through social engineering.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1091',
        method: "Replication Through Removable Media",
        description: "Adversaries may gain access to systems by copying malware to removable media and exploiting Autorun features.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1195',
        method: "Supply Chain Compromise",
        description: "Adversaries may manipulate products or delivery mechanisms in the supply chain to compromise systems before they reach the final consumer.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1195.001',
        method: "Compromise Software Dependencies and Development Tools",
        description: "Adversaries may manipulate software dependencies and development tools to inject malicious code before they reach the final consumer.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1195.002',
        method: "Compromise Software Supply Chain",
        description: "Adversaries may manipulate application software in the supply chain, replacing legitimate versions with modified ones.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1195.003',
        method: "Compromise Hardware Supply Chain",
        description: "Adversaries may manipulate hardware components in the supply chain, inserting backdoors that allow for compromise upon deployment.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1199',
        method: "Trusted Relationship",
        description: "Adversaries may exploit trusted third-party relationships to gain initial access to a network, leveraging less scrutinized connections.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078',
        method: "Valid Accounts",
        description: "Adversaries may obtain and abuse valid credentials to gain initial access, persistence, or privilege escalation within a network.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1078.001',
        method: "Default Accounts",
        description: "Adversaries may obtain and abuse default account credentials, such as the Guest or Administrator accounts, to gain initial access.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1078.002',
        method: "Domain Accounts",
        description: "Adversaries may obtain and abuse domain account credentials to gain initial access, persistence, or privilege escalation.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1078.003',
        method: "Local Accounts",
        description: "Adversaries may obtain and abuse local account credentials to gain initial access, persistence, or privilege escalation on specific systems.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1078.004',
        method: "Cloud Accounts",
        description: "Adversaries may obtain and abuse cloud account credentials to gain initial access, persistence, or privilege escalation within cloud environments.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      }
    ]
  },
  {
    id: 4,
    name: "Privilege Escalation",
    description: "Time to gain higher-level permissions. What's your approach?",
    phase: 'privilegeEscalation',
    choices: [
      {
        id: '4a',
        method: "Exploit Vulnerability",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '4b',
        method: "Access Token Manipulation",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '4c',
        method: "Sudo and Sudo Caching",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      }
    ]
  },
  {
    id: 5,
    name: "Defense Evasion",
    description: "The security team is onto you. How will you evade their defenses?",
    phase: 'defenseEvasion',
    choices: [
      {
        id: '5a',
        method: "Disable or Modify Tools",
        baseDifficulty: 15,
        successRateModifier: 0.75,
      },
      {
        id: '5b',
        method: "Obfuscated Files or Information",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '5c',
        method: "Rootkit",
        baseDifficulty: 18,
        successRateModifier: 0.5,
      }
    ]
  },
  {
    id: 6,
    name: "Credential Access",
    description: "You need valid credentials. How will you obtain them?",
    phase: 'credentialAccess',
    choices: [
      {
        id: '6a',
        method: "Brute Force",
        baseDifficulty: 14,
        successRateModifier: 0.8,
      },
      {
        id: '6b',
        method: "Credential Dumping",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '6c',
        method: "Steal or Forge Kerberos Tickets",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 7,
    name: "Discovery",
    description: "Explore the network. What's your method for gathering information?",
    phase: 'discovery',
    choices: [
      {
        id: '7a',
        method: "Network Service Scanning",
        baseDifficulty: 13,
        successRateModifier: 0.9,
      },
      {
        id: '7b',
        method: "Remote System Discovery",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      },
      {
        id: '7c',
        method: "Permission Groups Discovery",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      }
    ]
  },
  {
    id: 8,
    name: "Lateral Movement",
    description: "Time to expand your reach. How will you move through the network?",
    phase: 'lateralMovement',
    choices: [
      {
        id: '8a',
        method: "Remote Services",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '8b',
        method: "Internal Spearphishing",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '8c',
        method: "Exploit Remote Services",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 9,
    name: "Collection",
    description: "Gather valuable data. What's your collection method?",
    phase: 'collection',
    choices: [
      {
        id: '9a',
        method: "Data from Local System",
        baseDifficulty: 13,
        successRateModifier: 0.9,
      },
      {
        id: '9b',
        method: "Screen Capture",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      },
      {
        id: '9c',
        method: "Data from Network Shared Drive",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      }
    ]
  },
  {
    id: 10,
    name: "Exfiltration",
    description: "Time to get the data out. How will you exfiltrate it?",
    phase: 'exfiltration',
    choices: [
      {
        id: '10a',
        method: "Transfer Data to Cloud Account",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '10b',
        method: "Exfiltration Over Alternative Protocol",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '10c',
        method: "Exfiltration Over Physical Medium",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 11,
    name: "Impact",
    description: "Achieve your final objective. What's your endgame?",
    phase: 'impact',
    choices: [
      {
        id: '11a',
        method: "Data Destruction",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '11b',
        method: "Data Encryption for Impact",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      },
      {
        id: '11c',
        method: "Defacement",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      }
    ]
  },
  {
    id: 12,
    name: "Command and Control",
    description: "Establish command and control channels. How will you communicate with your assets?",
    phase: 'commandAndControl',
    choices: [
      {
        id: '12a',
        method: "Application Layer Protocol",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '12b',
        method: "Dynamic Resolution",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '12c',
        method: "Fallback Channels",
        baseDifficulty: 17,
        successRateModifier: 0.6,
      }
    ]
  },
  {
    id: 13,
    name: "Reconnaissance",
    description: "Gathering information is key. What's your approach to reconnaissance?",
    phase: 'reconnaissance',
    choices: [
      {
        id: '13a',
        method: "Active Scanning",
        baseDifficulty: 3,
        successRateModifier: 0.9,
      },
      {
        id: '13b',
        method: "Search Open Websites/Domains",
        baseDifficulty: 2,
        successRateModifier: 0.95,
      },
      {
        id: '13c',
        method: "Search Open Technical Databases",
        baseDifficulty: 4,
        successRateModifier: 0.85,
      }
    ]
  },
  {
    id: 14,
    name: "Resource Development",
    description: "Develop or acquire the resources you need. What's your strategy?",
    phase: 'resourceDevelopment',
    choices: [
      {
        id: '14a',
        method: "Acquire Infrastructure",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '14b',
        method: "Compromise Accounts",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '14c',
        method: "Establish Accounts",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      }
    ]
  },
  {
    id: 15,
    name: "Impact",
    description: "You've infiltrated the target. How will you maximize the impact?",
    phase: 'impact',
    choices: [
      {
        id: '15a',
        method: "Data Manipulation",
        baseDifficulty: 15,
        successRateModifier: 0.75,
      },
      {
        id: '15b',
        method: "Defacement",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '15c',
        method: "Disk Wipe",
        baseDifficulty: 17,
        successRateModifier: 0.65,
      }
    ]
  },
  {
    id: 16,
    name: "Execution",
    description: "Your operations are ongoing. Choose how to continue executing your payload.",
    phase: 'execution',
    choices: [
      {
        id: '16a',
        method: "Container Administration Command",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '16b',
        method: "Deploy Container",
        baseDifficulty: 16,
        successRateModifier: 0.75,
      },
      {
        id: '16c',
        method: "Serverless Execution",
        baseDifficulty: 17,
        successRateModifier: 0.7,
      }
    ]
  },
  {
    id: 17,
    name: "Defense Evasion",
    description: "Keep avoiding detection. How will you evade defenses?",
    phase: 'defenseEvasion',
    choices: [
      {
        id: '17a',
        method: "Debugger Evasion",
        baseDifficulty: 15,
        successRateModifier: 0.8,
      },
      {
        id: '17b',
        method: "Obfuscated Files or Information",
        baseDifficulty: 14,
        successRateModifier: 0.85,
      },
      {
        id: '17c',
        method: "Rootkit",
        baseDifficulty: 17,
        successRateModifier: 0.65,
      }
    ]
  },
  {
    id: 18,
    name: "Credential Access",
    description: "Need more access? What will you do to acquire more credentials?",
    phase: 'credentialAccess',
    choices: [
      {
        id: '18a',
        method: "Credentials from Password Stores",
        baseDifficulty: 16,
        successRateModifier: 0.7,
      },
      {
        id: '18b',
        method: "Steal or Forge Kerberos Tickets",
        baseDifficulty: 17,
        successRateModifier: 0.65,
      },
      {
        id: '18c',
        method: "Steal Application Access Token",
        baseDifficulty: 15,
        successRateModifier: 0.75,
      }
    ]
  }
];

export default scenarios;
