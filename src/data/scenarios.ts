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
    name: "Execution",
    description: "Now that you've gained access, it's time to execute your payload. Choose your method of execution.",
    phase: 'execution',
    choices: [
      {
        id: 'T1651',
        method: "Cloud Administration Command",
        description: "Adversaries may abuse cloud management services to execute commands within virtual machines, using resources like AWS Systems Manager or Azure RunCommand.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1059',
        method: "Command and Scripting Interpreter",
        description: "Adversaries may abuse command and script interpreters, such as the Windows Command Shell or Unix Shell, to execute commands, scripts, or binaries.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1059.001',
        method: "PowerShell",
        description: "Adversaries may abuse PowerShell commands and scripts for execution, leveraging its powerful scripting environment on Windows systems.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1059.002',
        method: "AppleScript",
        description: "Adversaries may abuse AppleScript for execution, using it to control applications and parts of the macOS via inter-application messages called AppleEvents.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1059.003',
        method: "Windows Command Shell",
        description: "Adversaries may abuse the Windows command shell (cmd) for execution, leveraging it to control almost any aspect of a Windows system.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1059.004',
        method: "Unix Shell",
        description: "Adversaries may abuse Unix shell commands and scripts for execution, controlling every aspect of a Linux or macOS system.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1059.005',
        method: "Visual Basic",
        description: "Adversaries may abuse Visual Basic (VB) for execution, leveraging it to interact with Windows technologies and APIs.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1059.006',
        method: "Python",
        description: "Adversaries may abuse Python commands and scripts for execution, utilizing its versatile scripting capabilities across different systems.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1059.007',
        method: "JavaScript",
        description: "Adversaries may abuse JavaScript for execution, leveraging its platform-independent nature and runtime environments outside the browser.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1059.008',
        method: "Network Device CLI",
        description: "Adversaries may abuse command-line interpreters (CLI) on network devices to execute malicious commands and payloads.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1059.009',
        method: "Cloud API",
        description: "Adversaries may abuse cloud APIs to execute malicious commands, utilizing features such as CLIs, Cloud Shells, or SDKs in cloud environments.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1059.010',
        method: "AutoHotKey & AutoIT",
        description: "Adversaries may execute commands and perform malicious tasks using AutoIT and AutoHotKey automation scripts to automate Windows tasks.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1609',
        method: "Container Administration Command",
        description: "Adversaries may abuse container administration services to execute commands within a container, such as the Docker daemon or Kubernetes API server.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1610',
        method: "Deploy Container",
        description: "Adversaries may deploy a container to execute processes associated with a particular image or bypass defenses within an environment.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1203',
        method: "Exploitation for Client Execution",
        description: "Adversaries may exploit software vulnerabilities in client applications to execute code, often through targeted exploitation.",
        baseDifficulty: 25,  // Very Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1559',
        method: "Inter-Process Communication",
        description: "Adversaries may abuse inter-process communication (IPC) mechanisms to execute local code or commands.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1559.001',
        method: "Component Object Model",
        description: "Adversaries may use the Windows Component Object Model (COM) for local code execution, leveraging it to interact with software objects.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1559.002',
        method: "Dynamic Data Exchange",
        description: "Adversaries may use Windows Dynamic Data Exchange (DDE) to execute arbitrary commands, utilizing it for inter-process communication.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1559.003',
        method: "XPC Services",
        description: "Adversaries may provide malicious content to an XPC service daemon for local code execution, often on macOS systems.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1106',
        method: "Native API",
        description: "Adversaries may interact with the native OS application programming interface (API) to execute malicious behaviors within the kernel.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1053',
        method: "Scheduled Task/Job",
        description: "Adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1053.002',
        method: "At",
        description: "Adversaries may abuse the at utility to perform task scheduling for execution on Windows, Linux, or macOS systems.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1053.003',
        method: "Cron",
        description: "Adversaries may abuse the cron utility to schedule jobs for execution on Unix-like operating systems.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1053.005',
        method: "Scheduled Task",
        description: "Adversaries may abuse the Windows Task Scheduler to perform task scheduling for initial or recurring execution of malicious code.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1053.006',
        method: "Systemd Timers",
        description: "Adversaries may abuse systemd timers to perform task scheduling for execution on Linux environments.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1053.007',
        method: "Container Orchestration Job",
        description: "Adversaries may abuse task scheduling in container orchestration tools like Kubernetes to schedule execution of malicious code.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1648',
        method: "Serverless Execution",
        description: "Adversaries may abuse serverless computing services in cloud environments to execute arbitrary code.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
                  id: 'T1129',
        method: "Shared Modules",
        description: "Adversaries may execute malicious payloads by loading shared modules, which provide access to reusable code or invoke OS API functions.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1072',
        method: "Software Deployment Tools",
        description: "Adversaries may gain access to and use centralized software suites within an enterprise to execute commands and move laterally through the network.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1569',
        method: "System Services",
        description: "Adversaries may abuse system services or daemons to execute commands or programs, achieving temporary or persistent execution.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1569.001',
        method: "Launchctl",
        description: "Adversaries may abuse launchctl on macOS to execute commands or programs by interfacing with the service management framework launchd.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1569.002',
        method: "Service Execution",
        description: "Adversaries may abuse the Windows service control manager (services.exe) to execute malicious commands or payloads.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1204',
        method: "User Execution",
        description: "Adversaries may rely on user actions, such as opening a malicious file or clicking a link, to execute malicious code.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1204.001',
        method: "Malicious Link",
        description: "Adversaries may rely on users clicking a malicious link to execute code, often as part of a spearphishing campaign.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1204.002',
        method: "Malicious File",
        description: "Adversaries may rely on users opening a malicious file, such as a document or executable, to execute code.",
        baseDifficulty: 10,  // Easy difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1204.003',
        method: "Malicious Image",
        description: "Adversaries may rely on users running a malicious image, such as a backdoored cloud or container image, to facilitate execution.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1047',
        method: "Windows Management Instrumentation",
        description: "Adversaries may abuse Windows Management Instrumentation (WMI) to execute malicious commands and payloads, leveraging it for administrative tasks.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      }
    ]
  },
{
    id: 5,
    name: "Persistence",
    description: "You've gained a foothold. Now, ensure your access remains secure. Choose your method to stay persistent within the target system.",
    phase: 'persistence',
    choices: [
      {
        id: 'T1098',
        method: "Account Manipulation",
        description: "Adversaries may manipulate accounts to maintain and/or elevate access to victim systems by modifying credentials or permission groups, subverting security policies, or performing iterative password updates.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1098.001',
        method: "Additional Cloud Credentials",
        description: "Adversaries may add adversary-controlled credentials to a cloud account to maintain persistent access to victim accounts and instances within the environment.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.002',
        method: "Additional Email Delegate Permissions",
        description: "Adversaries may grant additional permission levels to maintain persistent access to an adversary-controlled email account.",
        baseDifficulty: 12,  // Medium difficulty
        successRateModifier: 0.85,
      },
      {
        id: 'T1098.003',
        method: "Additional Cloud Roles",
        description: "Adversaries may add additional roles or permissions to an adversary-controlled cloud account to maintain persistent access to a tenant.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.004',
        method: "SSH Authorized Keys",
        description: "Adversaries may modify the SSH authorized_keys file to maintain persistence on a victim host.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1098.005',
        method: "Device Registration",
        description: "Adversaries may register a device to an adversary-controlled account in a multifactor authentication (MFA) or device management system.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1098.006',
        method: "Additional Container Cluster Roles",
        description: "Adversaries may add additional roles or permissions to maintain persistent access to a container orchestration system.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1197',
        method: "BITS Jobs",
        description: "Adversaries may abuse BITS jobs to persistently execute code and perform various background tasks in a Windows environment.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547',
        method: "Boot or Logon Autostart Execution",
        description: "Adversaries may configure system settings to automatically execute a program during system boot or logon to maintain persistence or gain higher-level privileges.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.001',
        method: "Registry Run Keys / Startup Folder",
        description: "Adversaries may achieve persistence by adding a program to a startup folder or referencing it with a Registry run key, which causes the program to be executed when a user logs in.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.002',
        method: "Authentication Package",
        description: "Adversaries may abuse authentication packages to execute DLLs when the system boots.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.003',
        method: "Time Providers",
        description: "Adversaries may abuse time providers to execute DLLs when the system boots.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.004',
        method: "Winlogon Helper DLL",
        description: "Adversaries may abuse features of Winlogon to execute DLLs and/or executables when a user logs in.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.005',
        method: "Security Support Provider",
        description: "Adversaries may abuse security support providers (SSPs) to execute DLLs when the system boots.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.006',
        method: "Kernel Modules and Extensions",
        description: "Adversaries may modify the kernel to automatically execute programs on system boot.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.007',
        method: "Re-opened Applications",
        description: "Adversaries may modify plist files to automatically run an application when a user logs in on macOS.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.008',
        method: "LSASS Driver",
        description: "Adversaries may modify or add LSASS drivers to obtain persistence on compromised systems.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.009',
        method: "Shortcut Modification",
        description: "Adversaries may create or modify shortcuts that can execute a program during system boot or user login.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.010',
        method: "Port Monitors",
        description: "Adversaries may use port monitors to run an adversary supplied DLL during system boot for persistence or privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.012',
        method: "Print Processors",
        description: "Adversaries may abuse print processors to run malicious DLLs during system boot for persistence and/or privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.013',
        method: "XDG Autostart Entries",
        description: "Adversaries may add or modify XDG Autostart Entries to execute malicious programs or commands when a user’s desktop environment is loaded at login.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.014',
        method: "Active Setup",
        description: "Adversaries may achieve persistence by adding a Registry key to the Active Setup of the local machine, causing the program to be executed when a user logs in.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1547.015',
        method: "Login Items",
        description: "Adversaries may add login items to execute upon user login to gain persistence or escalate privileges on macOS.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1037',
        method: "Boot or Logon Initialization Scripts",
        description: "Adversaries may use scripts automatically executed at boot or logon initialization to establish persistence.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.001',
        method: "Logon Script (Windows)",
        description: "Adversaries may use Windows logon scripts automatically executed at logon initialization to establish persistence.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1037.002',
        method: "Login Hook",
        description: "Adversaries may use a Login Hook to establish persistence executed upon user logon on macOS.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.003',
        method: "Network Logon Script",
        description: "Adversaries may use network logon scripts automatically executed at logon initialization to establish persistence.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1037.004',
        method: "RC Scripts",
        description: "Adversaries may establish persistence by modifying RC scripts, which are executed during a Unix-like system’s startup.",
        baseDifficulty: 16,  // Medium-Hard difficulty
                successRateModifier: 0.75,
      },
      {
        id: 'T1037.005',
        method: "Startup Items",
        description: "Adversaries may use startup items automatically executed at boot initialization to establish persistence. Startup items execute during the final phase of the boot process and contain shell scripts or other executable files along with configuration information used by the system to determine the execution order for all startup items.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1176',
        method: "Browser Extensions",
        description: "Adversaries may abuse Internet browser extensions to establish persistent access to victim systems. Browser extensions or plugins are small programs that can add functionality and customize aspects of Internet browsers.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1554',
        method: "Compromise Host Software Binary",
        description: "Adversaries may modify host software binaries to establish persistent access to systems. Software binaries/executables provide a wide range of system commands or services, programs, and libraries.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1136',
        method: "Create Account",
        description: "Adversaries may create an account to maintain access to victim systems. With a sufficient level of access, creating such accounts may be used to establish secondary credentialed access that do not require persistent remote access tools to be deployed on the system.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1136.001',
        method: "Local Account",
        description: "Adversaries may create a local account to maintain access to victim systems. Local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1136.002',
        method: "Domain Account",
        description: "Adversaries may create a domain account to maintain access to victim systems. Domain accounts are those managed by Active Directory Domain Services where access and permissions are configured across systems and services that are part of that domain.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1136.003',
        method: "Cloud Account",
        description: "Adversaries may create a cloud account to maintain access to victim systems. With a sufficient level of access, such accounts may be used to establish secondary credentialed access that does not require persistent remote access tools to be deployed on the system.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543',
        method: "Create or Modify System Process",
        description: "Adversaries may create or modify system-level processes to repeatedly execute malicious payloads as part of persistence. These system processes are known as services on Windows and Linux, and as Launch Daemons or Launch Agents on macOS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.001',
        method: "Launch Agent",
        description: "Adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence. Launch agents load at user login and perform tasks without user interaction.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.002',
        method: "Systemd Service",
        description: "Adversaries may create or modify systemd services to repeatedly execute malicious payloads as part of persistence. Systemd is commonly used for managing background daemon processes on Linux.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.003',
        method: "Windows Service",
        description: "Adversaries may create or modify Windows services to repeatedly execute malicious payloads as part of persistence. Services are programs that perform background system functions.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.004',
        method: "Launch Daemon",
        description: "Adversaries may create or modify Launch Daemons to execute malicious payloads as part of persistence. Launch Daemons are plist files used to interact with Launchd, the service management framework used by macOS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.005',
        method: "Container Service",
        description: "Adversaries may create or modify container or container cluster management tools that run as daemons, agents, or services on individual hosts.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546',
        method: "Event Triggered Execution",
        description: "Adversaries may establish persistence and/or elevate privileges using system mechanisms that trigger execution based on specific events.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.001',
        method: "Change Default File Association",
        description: "Adversaries may establish persistence by executing malicious content triggered by a file type association.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1546.002',
        method: "Screensaver",
        description: "Adversaries may establish persistence by executing malicious content triggered by user inactivity through modifying screensaver settings.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1546.003',
        method: "Windows Management Instrumentation Event Subscription",
        description: "Adversaries may establish persistence and elevate privileges by executing malicious content triggered by a Windows Management Instrumentation (WMI) event subscription.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.004',
        method: "Unix Shell Configuration Modification",
        description: "Adversaries may establish persistence through executing malicious commands triggered by a user’s shell.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.005',
        method: "Trap",
        description: "Adversaries may establish persistence by executing malicious content triggered by an interrupt signal using the trap command.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.006',
        method: "LC_LOAD_DYLIB Addition",
        description: "Adversaries may establish persistence by executing malicious content triggered by the execution of tainted binaries with LC_LOAD_DYLIB header modifications.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.007',
        method: "Netsh Helper DLL",
        description: "Adversaries may establish persistence by executing malicious content triggered by Netsh Helper DLLs.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.008',
        method: "Accessibility Features",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by accessibility features such as those that launch a command prompt before user logon.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.009',
        method: "AppCert DLLs",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppCert DLLs loaded into processes.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.010',
        method: "AppInit DLLs",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppInit DLLs loaded into processes.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.011',
        method: "Application Shimming",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by application shims.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.012',
        method: "Image File Execution Options Injection",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by Image File Execution Options (IFEO) debuggers. This involves modifying the Windows Registry to specify a debugger that will be launched when a specific process is started.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.013',
        method: "PowerShell Profile",
        description: "Adversaries may gain persistence and elevate privileges by executing malicious content triggered by PowerShell profiles. PowerShell profiles are scripts that run when PowerShell starts and can be used to customize user environments.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.014',
        method: "Emond",
        description: "Adversaries may gain persistence and elevate privileges by executing malicious content triggered by the Event Monitor Daemon (emond) on macOS. Emond processes rules defined in plist files to monitor and act upon specified events.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.015',
        method: "Component Object Model Hijacking",
        description: "Adversaries may establish persistence by executing malicious content triggered by hijacked references to Component Object Model (COM) objects. COM is a system within Windows that enables interaction between software components through the OS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.016',
        method: "Installer Packages",
        description: "Adversaries may establish persistence and elevate privileges by using an installer to trigger the execution of malicious content. Installer packages can include scripts that run prior to or after installation with elevated permissions.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1133',
        method: "External Remote Services",
        description: "Adversaries may leverage external-facing remote services to initially access and/or persist within a network. These services allow users to connect to internal enterprise network resources from external locations, which adversaries can exploit.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574',
        method: "Hijack Execution Flow",
        description: "Adversaries may execute their own malicious payloads by hijacking the way operating systems run programs, enabling persistence, privilege escalation, or evasion of defenses.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.001',
        method: "DLL Search Order Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking the search order used to load DLLs. This method exploits the way Windows systems search for required DLLs to load into a program.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.002',
        method: "DLL Side-Loading",
        description: "Adversaries may execute their own malicious payloads by side-loading DLLs. This involves planting a DLL within the search order of a program and waiting for the victim application to be invoked.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.004',
        method: "Dylib Hijacking",
        description: "Adversaries may execute their own payloads by placing a malicious dynamic library (dylib) with an expected name in a path a victim application searches at runtime on macOS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.005',
        method: "Executable Installer File Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the binaries used by an installer. This may occur if permissions on the file system directory containing a target binary or the binary itself are improperly set.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.006',
        method: "Dynamic Linker Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries, such as LD_PRELOAD on Linux or DYLD_INSERT_LIBRARIES on macOS.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.007',
        method: "Path Interception by PATH Environment Variable",
        description: "Adversaries may execute their own malicious payloads by hijacking environment variables used to load libraries. The PATH environment variable contains directories that the OS searches sequentially to find the binary to execute.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.008',
        method: "Path Interception by Search Order Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking the search order used to load other programs, placing their own file in the directory where the calling program is located.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.009',
        method: "Path Interception by Unquoted Path",
        description: "Adversaries may execute their own malicious payloads by hijacking vulnerable file path references. Adversaries can take advantage of paths that lack surrounding quotations by placing an executable in a higher level directory within the path.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.010',
        method: "Services File Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the binaries used by services. Improper permissions on the service binary or directory can allow adversaries to replace the binary and execute their own code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.011',
        method: "Services Registry Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the Registry entries used by services, redirecting from the originally specified executable to one that they control.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.012',
        method: "COR_PROFILER",
        description: "Adversaries may leverage the COR_PROFILER environment variable to hijack the execution flow of programs that load the .NET CLR, loading their own profiling DLL into each .NET process.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.013',
        method: "KernelCallbackTable",
        description: "Adversaries may abuse the KernelCallbackTable of a process to hijack its execution flow and run their own payloads.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.014',
        method: "AppDomainManager",
        description: "Adversaries may execute their own malicious payloads by hijacking how the .NET AppDomainManager loads assemblies.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1525',
        method: "Implant Internal Image",
        description: "Adversaries may implant cloud or container images with malicious code to establish persistence after gaining access to an environment. Unlike Upload Malware, this technique focuses on adversaries implanting an image in a registry within a victim’s environment.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556',
        method: "Modify Authentication Process",
        description: "Adversaries may modify authentication mechanisms and processes to access user credentials or enable otherwise unwarranted access to accounts.",
                baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.001',
        method: "Domain Controller Authentication",
        description: "Adversaries may patch the authentication process on a domain controller to bypass the typical authentication mechanisms and enable access to accounts.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1556.002',
        method: "Password Filter DLL",
        description: "Adversaries may register malicious password filter dynamic link libraries (DLLs) into the authentication process to acquire user credentials as they are validated.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.003',
        method: "Pluggable Authentication Modules",
        description: "Adversaries may modify pluggable authentication modules (PAM) to access user credentials or enable otherwise unwarranted access to accounts. PAM is a modular system that guides authentication for many services in Unix-based systems.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.004',
        method: "Network Device Authentication",
        description: "Adversaries may use Patch System Image to hard code a password in the operating system, thus bypassing native authentication mechanisms for local accounts on network devices.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1556.005',
        method: "Reversible Encryption",
        description: "An adversary may abuse Active Directory authentication encryption properties to gain access to credentials on Windows systems. The AllowReversiblePasswordEncryption property enables the storage of user credentials in a reversible encrypted form.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.006',
        method: "Multi-Factor Authentication",
        description: "Adversaries may disable or modify multi-factor authentication (MFA) mechanisms to enable persistent access to compromised accounts.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1556.007',
        method: "Hybrid Identity",
        description: "Adversaries may patch, modify, or otherwise backdoor cloud authentication processes that are tied to on-premises user identities in order to bypass typical authentication mechanisms and enable persistent access to accounts.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1556.008',
        method: "Network Provider DLL",
        description: "Adversaries may register malicious network provider dynamic link libraries (DLLs) to capture cleartext user credentials during the authentication process. These DLLs are used to interface with network protocols and can be manipulated to gather credentials during logon.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1556.009',
        method: "Conditional Access Policies",
        description: "Adversaries may disable or modify conditional access policies to enable persistent access to compromised accounts. These policies are used by identity providers to determine whether a user should be granted access to a resource.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137',
        method: "Office Application Startup",
        description: "Adversaries may leverage Microsoft Office-based applications for persistence between startups. Various mechanisms, such as Office Template Macros and add-ins, can be used to execute malicious code when Office applications are started.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.001',
        method: "Office Template Macros",
        description: "Adversaries may abuse Microsoft Office templates to obtain persistence on a compromised system. Templates are used by Office applications to customize styles and functionality, and can be manipulated to execute malicious code.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.002',
        method: "Office Test",
        description: "Adversaries may abuse the Microsoft Office 'Office Test' Registry key to obtain persistence on a compromised system. This key allows a user to specify an arbitrary DLL that will be executed every time an Office application is started.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.003',
        method: "Outlook Forms",
        description: "Adversaries may abuse Microsoft Outlook forms to obtain persistence on a compromised system. Custom Outlook forms can be created that will execute code when a specifically crafted email is sent by an adversary utilizing the same custom form.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.004',
        method: "Outlook Home Page",
        description: "Adversaries may abuse Microsoft Outlook's Home Page feature to obtain persistence on a compromised system. This feature allows for an internal or external URL to be loaded and presented whenever a folder is opened.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.005',
        method: "Outlook Rules",
        description: "Adversaries may abuse Microsoft Outlook rules to obtain persistence on a compromised system. Malicious Outlook rules can be created to trigger code execution when an adversary sends a specifically crafted email.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1137.006',
        method: "Add-ins",
        description: "Adversaries may abuse Microsoft Office add-ins to obtain persistence on a compromised system. These add-ins can be used to extend Office functionality and may be manipulated to execute malicious code.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1653',
        method: "Power Settings",
        description: "Adversaries may impair a system's ability to hibernate, reboot, or shut down in order to extend access to infected machines. This technique involves modifying system power settings to prevent these actions from disrupting malicious activity.",
        baseDifficulty: 14,  // Medium difficulty
        successRateModifier: 0.8,
      },
      {
        id: 'T1542',
        method: "Pre-OS Boot",
        description: "Adversaries may abuse Pre-OS Boot mechanisms as a way to establish persistence on a system. During the booting process, firmware and startup services are loaded before the operating system, and these can be modified to execute malicious code.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.001',
        method: "System Firmware",
        description: "Adversaries may modify system firmware, such as the BIOS or UEFI, to persist on systems. This technique operates below the operating system, making it difficult to detect and remove.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.002',
        method: "Component Firmware",
        description: "Adversaries may modify component firmware to persist on systems. This can involve compromising firmware on devices such as hard drives, network cards, or other peripherals, enabling deep system access.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.003',
        method: "Bootkit",
        description: "Adversaries may use bootkits to persist on systems. Bootkits reside at a layer below the operating system, making it difficult to perform full remediation unless they are suspected and targeted.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.004',
        method: "ROMMONkit",
        description: "Adversaries may abuse the ROM Monitor (ROMMON) by loading unauthorized firmware with adversary code to provide persistent access and manipulate device behavior, which is difficult to detect.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1542.005',
        method: "TFTP Boot",
        description: "Adversaries may abuse netbooting to load an unauthorized network device operating system from a Trivial File Transfer Protocol (TFTP) server, enabling persistent access to network devices.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053',
        method: "Scheduled Task/Job",
        description: "Adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code. Utilities exist within all major operating systems to schedule programs or scripts to be executed at a specified date and time.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.002',
        method: "At",
        description: "Adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. The at utility exists within Windows, Linux, and macOS for scheduling tasks at a specified time and date.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.003',
        method: "Cron",
        description: "Adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. The cron utility is a time-based job scheduler for Unix-like operating systems.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.005',
        method: "Scheduled Task",
        description: "Adversaries may abuse the Windows Task Scheduler to perform task scheduling for initial or recurring execution of malicious code. This can be done through the schtasks utility on the command line or through the Task Scheduler GUI.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.006',
        method: "Systemd Timers",
        description: "Adversaries may abuse systemd timers to perform task scheduling for initial or recurring execution of malicious code. Systemd timers are unit files with file extension .timer that control services and can be set to run on a calendar event or after a time span relative to a starting point.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.007',
        method: "Container Orchestration Job",
        description: "Adversaries may abuse task scheduling functionality provided by container orchestration tools such as Kubernetes to schedule deployment of containers configured to execute malicious code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505',
        method: "Server Software Component",
        description: "Adversaries may abuse legitimate extensible development features of servers to establish persistent access to systems. Server applications may allow developers to write and install software or scripts to extend the functionality of the main application.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.001',
        method: "SQL Stored Procedures",
        description: "Adversaries may abuse SQL stored procedures to establish persistent access to systems. SQL stored procedures are code that can be saved and reused, and they can be manipulated to execute malicious code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.002',
        method: "Transport Agent",
        description: "Adversaries may abuse Microsoft transport agents to establish persistent access to systems. These agents operate on email messages passing through the transport pipeline and can be used to execute malicious code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.003',
        method: "Web Shell",
        description: "Adversaries may backdoor web servers with web shells to establish persistent access to systems. A web shell is a web script placed on a server to allow an adversary to access the server as a gateway into a network.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.004',
        method: "IIS Components",
        description: "Adversaries may install malicious components on Internet Information Services (IIS) web servers to establish persistence. IIS components can extend the functionality of the server, and adversaries can manipulate them to execute malicious code.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1505.005',
        method: "Terminal Services DLL",
        description: "Adversaries may abuse components of Terminal Services to enable persistent access to systems. Terminal Services, also known as Remote Desktop Services, allow remote terminal connections to hosts, which adversaries can exploit.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1205',
        method: "Traffic Signaling",
        description: "Adversaries may use traffic signaling to hide open ports or other malicious functionality used for persistence or command and control. This technique involves sending a magic value or sequence to a system to trigger a special response, such as opening a closed port.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1205.001',
        method: "Port Knocking",
        description: "Adversaries may use port knocking to hide open ports used for persistence or command and control. This involves sending a series of attempted connections to a predefined sequence of closed ports to enable a port.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1205.002',
        method: "Socket Filters",
        description: "Adversaries may attach filters to a network socket to monitor and then activate backdoors used for persistence or command and control. This can involve using libraries like libpcap to open sockets and install filters to trigger actions when specific data is received.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078',
        method: "Valid Accounts",
        description: "Adversaries may obtain and abuse credentials of existing accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Compromised credentials can be used to bypass access controls and maintain persistence on systems.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.001',
        method: "Default Accounts",
        description: "Adversaries may obtain and abuse credentials of a default account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Default accounts include those built into operating systems or devices, such as the Administrator account on Windows systems.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.002',
        method: "Domain Accounts",
        description: "Adversaries may obtain and abuse credentials of a domain account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Domain accounts are managed by Active Directory Domain Services and cover users, administrators, and services across a domain.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.003',
        method: "Local Accounts",
        description: "Adversaries may obtain and abuse credentials of a local account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion. Local accounts are configured by an organization for use on individual systems or services.",
        baseDifficulty: 16,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.004',
        method: "Cloud Accounts",
        description: "Adversaries may obtain and abuse credentials of a cloud account to gain access to cloud resources and maintain persistence within a cloud environment. Cloud accounts can be used to access resources and services within a cloud service provider or SaaS application.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
    ],
  },
    {
    id: 6,
    name: "Privilege Escalation",
    description: "You're in, but you need more power. Choose your method to elevate your privileges and gain control over critical system functions.",
    phase: 'privilegeEscalation',
    choices: [
      {
        id: 'T1548',
        method: "Abuse Elevation Control Mechanism",
        description: "Adversaries may circumvent mechanisms designed to control and elevate privileges to gain higher-level permissions. This may involve exploiting native elevation control mechanisms to escalate privileges on a system.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.001',
        method: "Setuid and Setgid",
        description: "An adversary may abuse configurations where an application has the setuid or setgid bits set in order to get code running in a different user’s context, potentially gaining elevated privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.002',
        method: "Bypass User Account Control",
        description: "Adversaries may bypass UAC mechanisms to elevate process privileges on a system, which may involve prompting the user for confirmation or exploiting UAC bypass techniques.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1548.003',
        method: "Sudo and Sudo Caching",
        description: "Adversaries may perform sudo caching and/or use the sudoers file to elevate privileges, allowing them to execute commands as other users or spawn processes with higher privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.004',
        method: "Elevated Execution with Prompt",
        description: "Adversaries may leverage the AuthorizationExecuteWithPrivileges API on macOS to escalate privileges by prompting the user for credentials.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.005',
        method: "Temporary Elevated Cloud Access",
        description: "Adversaries may abuse permission configurations to gain temporarily elevated access to cloud resources, such as impersonating other accounts or gaining short-term access to elevated privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1548.006',
        method: "TCC Manipulation",
        description: "Adversaries can manipulate or abuse the Transparency, Consent, & Control (TCC) service or database on macOS to execute malicious applications with elevated permissions.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1134',
        method: "Access Token Manipulation",
        description: "Adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.001',
        method: "Token Impersonation/Theft",
        description: "Adversaries may duplicate and impersonate another user's existing token to escalate privileges and bypass access controls.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.002',
        method: "Create Process with Token",
        description: "Adversaries may create a new process with an existing token to escalate privileges and bypass access controls using features like CreateProcessWithTokenW.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.003',
        method: "Make and Impersonate Token",
        description: "Adversaries may make new tokens and impersonate users to escalate privileges and bypass access controls, such as by using the LogonUser function.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.004',
        method: "Parent PID Spoofing",
        description: "Adversaries may spoof the parent process identifier (PPID) of a new process to evade process-monitoring defenses or to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1134.005',
        method: "SID-History Injection",
        description: "Adversaries may use SID-History Injection to escalate privileges and bypass access controls by adding security identifiers (SIDs) to access tokens.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1098',
        method: "Account Manipulation",
        description: "Adversaries may manipulate accounts to maintain and/or elevate access to victim systems, including modifying credentials or permission groups.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.001',
        method: "Additional Cloud Credentials",
        description: "Adversaries may add adversary-controlled credentials to a cloud account to maintain persistent access or escalate privileges within a cloud environment.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1098.002',
        method: "Additional Email Delegate Permissions",
        description: "Adversaries may grant additional permission levels to maintain persistent access or escalate privileges in an adversary-controlled email account.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.003',
        method: "Additional Cloud Roles",
        description: "Adversaries may add additional roles or permissions to an adversary-controlled cloud account to maintain persistent access or escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1098.004',
        method: "SSH Authorized Keys",
        description: "Adversaries may modify the SSH authorized_keys file to maintain persistence or escalate privileges on a victim host.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.005',
        method: "Device Registration",
        description: "Adversaries may register a device to an adversary-controlled account in a multifactor authentication (MFA) or device management system to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1098.006',
        method: "Additional Container Cluster Roles",
        description: "Adversaries may add additional roles or permissions to an adversary-controlled account to escalate privileges in a container orchestration system.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547',
        method: "Boot or Logon Autostart Execution",
        description: "Adversaries may configure system settings to automatically execute a program during system boot or logon to maintain persistence or escalate privileges on compromised systems.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.001',
        method: "Registry Run Keys / Startup Folder",
        description: "Adversaries may achieve persistence by adding a program to a startup folder or referencing it with a Registry run key, causing it to be executed when a user logs in.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.002',
        method: "Authentication Package",
        description: "Adversaries may abuse authentication packages to execute DLLs when the system boots, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.003',
        method: "Time Providers",
        description: "Adversaries may abuse time providers to execute DLLs when the system boots, which can be used to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.004',
        method: "Winlogon Helper DLL",
        description: "Adversaries may abuse features of Winlogon to execute DLLs and/or executables when a user logs in, which can be used to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.005',
        method: "Security Support Provider",
        description: "Adversaries may abuse security support providers (SSPs) to execute DLLs when the system boots, allowing them to escalate privileges.",
                baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.006',
        method: "Kernel Modules and Extensions",
        description: "Adversaries may modify the kernel to automatically execute programs on system boot, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.007',
        method: "Re-opened Applications",
        description: "Adversaries may modify plist files to automatically run an application when a user logs in, which can be used to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.008',
        method: "LSASS Driver",
        description: "Adversaries may modify or add LSASS drivers to obtain persistence on compromised systems, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.009',
        method: "Shortcut Modification",
        description: "Adversaries may create or modify shortcuts that can execute a program during system boot or user login, which can be used to escalate privileges.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.010',
        method: "Port Monitors",
        description: "Adversaries may use port monitors to run an adversary-supplied DLL during system boot for persistence or privilege escalation.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1547.012',
        method: "Print Processors",
        description: "Adversaries may abuse print processors to run malicious DLLs during system boot for persistence and/or privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.013',
        method: "XDG Autostart Entries",
        description: "Adversaries may add or modify XDG Autostart Entries to execute malicious programs or commands when a user’s desktop environment is loaded at login.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.014',
        method: "Active Setup",
        description: "Adversaries may achieve persistence by adding a Registry key to the Active Setup of the local machine, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1547.015',
        method: "Login Items",
        description: "Adversaries may add login items to execute upon user login to gain persistence or escalate privileges.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037',
        method: "Boot or Logon Initialization Scripts",
        description: "Adversaries may use scripts automatically executed at boot or logon initialization to establish persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.001',
        method: "Logon Script (Windows)",
        description: "Adversaries may use Windows logon scripts automatically executed at logon initialization to establish persistence or escalate privileges.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.002',
        method: "Login Hook",
        description: "Adversaries may use a Login Hook to establish persistence executed upon user logon, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.003',
        method: "Network Logon Script",
        description: "Adversaries may use network logon scripts automatically executed at logon initialization to establish persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1037.004',
        method: "RC Scripts",
        description: "Adversaries may establish persistence by modifying RC scripts which are executed during a Unix-like system’s startup, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1037.005',
        method: "Startup Items",
        description: "Adversaries may use startup items automatically executed at boot initialization to establish persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543',
        method: "Create or Modify System Process",
        description: "Adversaries may create or modify system-level processes to repeatedly execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.001',
        method: "Launch Agent",
        description: "Adversaries may create or modify launch agents to repeatedly execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.002',
        method: "Systemd Service",
        description: "Adversaries may create or modify systemd services to repeatedly execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.003',
        method: "Windows Service",
        description: "Adversaries may create or modify Windows services to repeatedly execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.004',
        method: "Launch Daemon",
        description: "Adversaries may create or modify Launch Daemons to execute malicious payloads as part of persistence or escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1543.005',
        method: "Container Service",
        description: "Adversaries may create or modify container or container cluster management tools that run as daemons, agents, or services on individual hosts, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1484',
        method: "Domain or Tenant Policy Modification",
        description: "Adversaries may modify the configuration settings of a domain or identity tenant to evade defenses and/or escalate privileges in centrally managed environments.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1484.001',
        method: "Group Policy Modification",
        description: "Adversaries may modify Group Policy Objects (GPOs) to subvert the intended discretionary access controls for a domain, usually with the intention of escalating privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1484.002',
        method: "Trust Modification",
        description: "Adversaries may add new domain trusts, modify the properties of existing domain trusts, or otherwise change the configuration of trust relationships between domains and tenants to evade defenses and/or elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1611',
        method: "Escape to Host",
        description: "Adversaries may break out of a container to gain access to the underlying host, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546',
        method: "Event Triggered Execution",
        description: "Adversaries may establish persistence and/or elevate privileges using system mechanisms that trigger execution based on specific events.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.001',
        method: "Change Default File Association",
        description: "Adversaries may establish persistence by executing malicious content triggered by a file type association, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.002',
        method: "Screensaver",
                description: "Adversaries may establish persistence by executing malicious content triggered by user inactivity, such as screensavers, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.003',
        method: "Windows Management Instrumentation Event Subscription",
        description: "Adversaries may establish persistence and elevate privileges by executing malicious content triggered by a Windows Management Instrumentation (WMI) event subscription.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.004',
        method: "Unix Shell Configuration Modification",
        description: "Adversaries may establish persistence through executing malicious commands triggered by a user’s shell configuration, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.005',
        method: "Trap",
        description: "Adversaries may establish persistence by executing malicious content triggered by an interrupt signal using the trap command, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.006',
        method: "LC_LOAD_DYLIB Addition",
        description: "Adversaries may establish persistence by executing malicious content triggered by the execution of tainted binaries through Mach-O headers, allowing them to escalate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.007',
        method: "Netsh Helper DLL",
        description: "Adversaries may establish persistence by executing malicious content triggered by Netsh Helper DLLs, allowing them to escalate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.008',
        method: "Accessibility Features",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by accessibility features, such as Sticky Keys or Utilman.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.009',
        method: "AppCert DLLs",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppCert DLLs loaded into processes.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.010',
        method: "AppInit DLLs",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by AppInit DLLs loaded into processes.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.011',
        method: "Application Shimming",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by application shims.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.012',
        method: "Image File Execution Options Injection",
        description: "Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by Image File Execution Options (IFEO) debuggers.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.013',
        method: "PowerShell Profile",
        description: "Adversaries may gain persistence and elevate privileges by executing malicious content triggered by PowerShell profiles.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1546.014',
        method: "Emond",
        description: "Adversaries may gain persistence and elevate privileges by executing malicious content triggered by the Event Monitor Daemon (emond) on macOS.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.015',
        method: "Component Object Model Hijacking",
        description: "Adversaries may establish persistence by executing malicious content triggered by hijacked references to Component Object Model (COM) objects.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1546.016',
        method: "Installer Packages",
        description: "Adversaries may establish persistence and elevate privileges by using an installer to trigger the execution of malicious content.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1068',
        method: "Exploitation for Privilege Escalation",
        description: "Adversaries may exploit software vulnerabilities in an attempt to elevate privileges, such as exploiting vulnerabilities in operating systems or applications.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574',
        method: "Hijack Execution Flow",
        description: "Adversaries may execute their own malicious payloads by hijacking the way operating systems run programs, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.001',
        method: "DLL Search Order Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking the search order used to load DLLs, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.002',
        method: "DLL Side-Loading",
        description: "Adversaries may execute their own malicious payloads by side-loading DLLs, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.004',
        method: "Dylib Hijacking",
        description: "Adversaries may execute their own payloads by placing a malicious dynamic library (dylib) with an expected name in a path a victim application searches at runtime, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.005',
        method: "Executable Installer File Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the binaries used by an installer with improperly set permissions, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.006',
        method: "Dynamic Linker Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking environment variables the dynamic linker uses to load shared libraries, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.007',
        method: "Path Interception by PATH Environment Variable",
        description: "Adversaries may execute their own malicious payloads by hijacking environment variables used to load libraries, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.008',
        method: "Path Interception by Search Order Hijacking",
        description: "Adversaries may execute their own malicious payloads by hijacking the search order used to load other programs, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.009',
        method: "Path Interception by Unquoted Path",
        description: "Adversaries may execute their own malicious payloads by hijacking vulnerable file path references, which can be used to elevate privileges.",
        baseDifficulty: 16,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.010',
        method: "Services File Permissions Weakness",
        description: "Adversaries may execute their own malicious payloads by hijacking the binaries used by services with improperly set permissions, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.011',
        method: "Services Registry Permissions Weakness",
                description: "Adversaries may execute their own malicious payloads by hijacking the Registry entries used by services, which can be used to elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1574.012',
        method: "COR_PROFILER",
        description: "Adversaries may leverage the COR_PROFILER environment variable to hijack the execution flow of programs that load the .NET CLR, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.013',
        method: "KernelCallbackTable",
        description: "Adversaries may abuse the KernelCallbackTable of a process to hijack its execution flow in order to run their own payloads, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.014',
        method: "AppDomainManager",
        description: "Adversaries may execute their own malicious payloads by hijacking how the .NET AppDomainManager loads assemblies, which can be used to elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055',
        method: "Process Injection",
        description: "Adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.001',
        method: "Dynamic-link Library Injection",
        description: "Adversaries may inject dynamic-link libraries (DLLs) into processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.002',
        method: "Portable Executable Injection",
        description: "Adversaries may inject portable executables (PE) into processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.003',
        method: "Thread Execution Hijacking",
        description: "Adversaries may inject malicious code into hijacked processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.004',
        method: "Asynchronous Procedure Call",
        description: "Adversaries may inject malicious code into processes via the asynchronous procedure call (APC) queue in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.005',
        method: "Thread Local Storage",
        description: "Adversaries may inject malicious code into processes via thread local storage (TLS) callbacks in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.008',
        method: "Ptrace System Calls",
        description: "Adversaries may inject malicious code into processes via ptrace (process trace) system calls in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.009',
        method: "Proc Memory",
        description: "Adversaries may inject malicious code into processes via the /proc filesystem in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.011',
        method: "Extra Window Memory Injection",
        description: "Adversaries may inject malicious code into processes via Extra Window Memory (EWM) in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1055.012',
        method: "Process Hollowing",
        description: "Adversaries may inject malicious code into suspended and hollowed processes in order to evade process-based defenses.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.013',
        method: "Process Doppelgänging",
        description: "Adversaries may inject malicious code into processes via process doppelgänging in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.014',
        method: "VDSO Hijacking",
        description: "Adversaries may inject malicious code into processes via VDSO hijacking in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1055.015',
        method: "ListPlanting",
        description: "Adversaries may abuse list-view controls to inject malicious code into hijacked processes in order to evade process-based defenses as well as possibly elevate privileges.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053',
        method: "Scheduled Task/Job",
        description: "Adversaries may abuse task scheduling functionality to facilitate initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.002',
        method: "At",
        description: "Adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.003',
        method: "Cron",
        description: "Adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.005',
        method: "Scheduled Task",
        description: "Adversaries may abuse the Windows Task Scheduler to perform task scheduling for initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.006',
        method: "Systemd Timers",
        description: "Adversaries may abuse systemd timers to perform task scheduling for initial or recurring execution of malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1053.007',
        method: "Container Orchestration Job",
        description: "Adversaries may abuse task scheduling functionality provided by container orchestration tools such as Kubernetes to schedule deployment of containers configured to execute malicious code, potentially leading to privilege escalation.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1078',
        method: "Valid Accounts",
        description: "Adversaries may obtain and abuse credentials of existing accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1078.001',
        method: "Default Accounts",
        description: "Adversaries may obtain and abuse credentials of a default account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.002',
        method: "Domain Accounts",
        description: "Adversaries may obtain and abuse credentials of a domain account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1078.003',
        method: "Local Accounts",
        description: "Adversaries may obtain and abuse credentials of a local account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 18,  // Medium-Hard difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1078.004',
        method: "Cloud Accounts",
        description: "Adversaries may obtain and abuse credentials of cloud accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
        baseDifficulty: 20,  // Hard difficulty
        successRateModifier: 0.7,
      },
    ],
  },
{
    id: 7,
    name: "Defense Evasion",
    description: "Adversaries attempt to avoid detection or defeat security defenses. Which evasion technique will you deploy?",
    phase: 'defense-evasion',
    choices: [
             {
        id: 'T1548',
        method: "Abuse Elevation Control Mechanism",
        description: "Adversaries may circumvent mechanisms designed to control elevated privileges to gain higher-level permissions.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1548.001',
        method: "Setuid and Setgid",
        description: "Abuse configurations where an application has the setuid or setgid bits set to gain elevated privileges.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.002',
        method: "Bypass User Account Control",
        description: "Bypass UAC mechanisms to elevate process privileges on a system.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1548.003',
        method: "Sudo and Sudo Caching",
        description: "Perform sudo caching and/or use the sudoers file to elevate privileges.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1548.004',
        method: "Elevated Execution with Prompt",
        description: "Leverage AuthorizationExecuteWithPrivileges API to escalate privileges by prompting the user for credentials.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1548.005',
        method: "Temporary Elevated Cloud Access",
        description: "Abuse permission configurations to gain temporarily elevated access to cloud resources.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1548.006',
        method: "TCC Manipulation",
        description: "Manipulate the Transparency, Consent, & Control (TCC) service or database to execute malicious applications with elevated permissions.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1134',
        method: "Access Token Manipulation",
        description: "Adversaries may modify access tokens to operate under a different user or system security context to perform actions and bypass access controls.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.001',
        method: "Token Impersonation/Theft",
        description: "Impersonate another user's existing token to escalate privileges and bypass access controls.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.002',
        method: "Create Process with Token",
        description: "Create a new process with an existing token to escalate privileges and bypass access controls.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.003',
        method: "Make and Impersonate Token",
        description: "Make new tokens and impersonate users to escalate privileges and bypass access controls.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1134.004',
        method: "Parent PID Spoofing",
        description: "Spoof the parent process identifier (PPID) of a new process to evade process-monitoring defenses or to elevate privileges.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1134.005',
        method: "SID-History Injection",
        description: "Use SID-History Injection to escalate privileges and bypass access controls.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1197',
        method: "BITS Jobs",
        description: "Abuse BITS jobs to persistently execute code and perform various background tasks.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1612',
        method: "Build Image on Host",
        description: "Build a container image directly on a host to bypass defenses that monitor for the retrieval of malicious images from a public registry.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1622',
        method: "Debugger Evasion",
        description: "Employ various means to detect and avoid debuggers.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1140',
        method: "Deobfuscate/Decode Files or Information",
        description: "Use Obfuscated Files or Information to hide artifacts of an intrusion from analysis.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1610',
        method: "Deploy Container",
        description: "Deploy a container into an environment to facilitate execution or evade defenses.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1006',
        method: "Direct Volume Access",
        description: "Directly access a volume to bypass file access controls and file system monitoring.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1484',
        method: "Domain or Tenant Policy Modification",
        description: "Modify the configuration settings of a domain or identity tenant to evade defenses and/or escalate privileges.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1484.001',
        method: "Group Policy Modification",
        description: "Modify Group Policy Objects (GPOs) to subvert the intended discretionary access controls for a domain.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1484.002',
        method: "Trust Modification",
        description: "Add new domain trusts, modify the properties of existing domain trusts, or change the configuration of trust relationships between domains and tenants.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1480',
        method: "Execution Guardrails",
        description: "Use execution guardrails to constrain execution or actions based on adversary supplied and environment-specific conditions.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1480.001',
        method: "Environmental Keying",
        description: "Use cryptographic techniques for deriving encryption/decryption keys from specific types of values in a given computing environment.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1211',
        method: "Exploitation for Defense Evasion",
        description: "Exploit a system or application vulnerability to bypass security features.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1222',
        method: "File and Directory Permissions Modification",
        description: "Modify file or directory permissions/attributes to evade access control lists (ACLs) and access protected files.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1222.001',
        method: "Windows File and Directory Permissions Modification",
        description: "Modify file or directory permissions/attributes on Windows systems to evade access control lists (ACLs) and access protected files.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1222.002',
        method: "Linux and Mac File and Directory Permissions Modification",
        description: "Modify file or directory permissions/attributes on Linux and Mac systems to evade access control lists (ACLs) and access protected files.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1564',
        method: "Hide Artifacts",
        description: "Attempt to hide artifacts associated with their behaviors to evade detection.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.75,
      },
              {
        id: 'T1564.001',
        method: "Hidden Files and Directories",
        description: "Set files and directories to be hidden to evade detection mechanisms.",
        baseDifficulty: 15,  // Medium difficulty
        successRateModifier: 0.75,
      },
      {
        id: 'T1564.002',
        method: "Hidden Users",
        description: "Use hidden users to hide the presence of user accounts created or modified by adversaries.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1564.003',
        method: "Hidden Window",
        description: "Use hidden windows to conceal malicious activity from the plain sight of users.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1564.004',
        method: "NTFS File Attributes",
        description: "Use NTFS file attributes to hide malicious data in order to evade detection.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1564.005',
        method: "Hidden File System",
        description: "Use a hidden file system to conceal malicious activity from users and security tools.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1564.006',
        method: "Run Virtual Instance",
        description: "Carry out malicious operations using a virtual instance to avoid detection.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1564.007',
        method: "VBA Stomping",
        description: "Hide malicious Visual Basic for Applications (VBA) payloads by replacing the VBA source code with benign data.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1564.008',
        method: "Email Hiding Rules",
        description: "Use email rules to hide inbound emails in a compromised user's mailbox.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1564.009',
        method: "Resource Forking",
        description: "Abuse resource forks to hide malicious code or executables to evade detection.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1564.010',
        method: "Process Argument Spoofing",
        description: "Hide process command-line arguments by overwriting process memory.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1564.011',
        method: "Ignore Process Interrupts",
        description: "Evade defensive mechanisms by executing commands that hide from process interrupt signals.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1564.012',
        method: "File/Path Exclusions",
        description: "Attempt to hide file-based artifacts by writing them to specific folders or file names excluded from antivirus (AV) scanning.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574',
        method: "Hijack Execution Flow",
        description: "Execute malicious payloads by hijacking the way operating systems run programs.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.001',
        method: "DLL Search Order Hijacking",
        description: "Hijack the search order used to load DLLs to execute malicious payloads.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.002',
        method: "DLL Side-Loading",
        description: "Directly side-load payloads by planting then invoking a legitimate application that executes the payload(s).",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1574.004',
        method: "Dylib Hijacking",
        description: "Execute malicious payloads by placing a malicious dynamic library (dylib) in a path a victim application searches at runtime.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1574.005',
        method: "Executable Installer File Permissions Weakness",
        description: "Hijack binaries used by an installer by overwriting them to execute malicious payloads.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574.006',
        method: "Dynamic Linker Hijacking",
        description: "Hijack environment variables the dynamic linker uses to load shared libraries.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574.007',
        method: "Path Interception by PATH Environment Variable",
        description: "Hijack environment variables used to load libraries by exploiting the PATH environment variable.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574.008',
        method: "Path Interception by Search Order Hijacking",
        description: "Hijack the search order used to load programs by placing a malicious file in the directory where the calling program is located.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574.009',
        method: "Path Interception by Unquoted Path",
        description: "Exploit vulnerable file path references to execute malicious payloads.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574.010',
        method: "Services File Permissions Weakness",
        description: "Hijack binaries used by services by overwriting them to execute malicious payloads.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574.011',
        method: "Services Registry Permissions Weakness",
        description: "Hijack the Registry entries used by services to execute malicious payloads.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574.012',
        method: "COR_PROFILER",
        description: "Hijack the execution flow of programs that load the .NET CLR by leveraging the COR_PROFILER environment variable.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574.013',
        method: "KernelCallbackTable",
        description: "Abuse the KernelCallbackTable of a process to hijack its execution flow and run malicious payloads.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1574.014',
        method: "AppDomainManager",
        description: "Hijack how the .NET AppDomainManager loads assemblies to execute malicious payloads.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1562',
        method: "Impair Defenses",
        description: "Maliciously modify components of a victim environment to hinder or disable defensive mechanisms.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1562.001',
        method: "Disable or Modify Tools",
        description: "Modify and/or disable security tools to avoid possible detection of malware/tools and activities.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1562.002',
        method: "Disable Windows Event Logging",
        description: "Disable Windows event logging to limit data that can be leveraged for detections and audits.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1562.003',
        method: "Impair Command History Logging",
        description: "Impair command history logging to hide commands run on a compromised system.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1562.004',
        method: "Disable or Modify System Firewall",
        description: "Disable or modify system firewalls to bypass controls limiting network usage.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1562.006',
        method: "Indicator Blocking",
        description: "Attempt to block indicators or events typically captured by sensors from being gathered and analyzed.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1562.007',
        method: "Disable or Modify Cloud Firewall",
        description: "Disable or modify a firewall within a cloud environment to bypass controls that limit access to cloud resources.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1562.008',
        method: "Disable or Modify Cloud Logs",
        description: "Disable or modify cloud logging capabilities and integrations to limit what data is collected on adversary activities.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1562.009',
        method: "Safe Mode Boot",
        description: "Abuse Windows safe mode to disable endpoint defenses.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1562.010',
        method: "Downgrade Attack",
        description: "Downgrade or use a version of system features that may be outdated, vulnerable, and/or does not support updated security controls.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1562.011',
        method: "Spoof Security Alerting",
        description: "Spoof security alerting from tools, presenting false evidence to impair defenders’ awareness of malicious activity.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1562.012',
        method: "Disable or Modify Linux Audit System",
        description: "Disable or modify the Linux audit system to hide malicious activity and avoid detection.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1656',
        method: "Impersonation",
        description: "Impersonate a trusted person or organization to persuade and trick a target into performing some action.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1070',
        method: "Indicator Removal",
        description: "Delete or modify artifacts generated within systems to remove evidence of presence or hinder defenses.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1070.001',
        method: "Clear Windows Event Logs",
        description: "Clear Windows Event Logs to hide the activity of an intrusion.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1070.002',
        method: "Clear Linux or Mac System Logs",
        description: "Clear system logs to hide evidence of an intrusion.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1070.003',
        method: "Clear Command History",
        description: "Clear the command history of a compromised account to conceal the actions undertaken during an intrusion.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1070.004',
        method: "File Deletion",
        description: "Delete files left behind by the actions of intrusion activity to minimize the footprint.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1070.005',
        method: "Network Share Connection Removal",
        description: "Remove share connections that are no longer useful to clean up traces of operations.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1070.006',
        method: "Timestomp",
        description: "Modify file time attributes to hide new or changes to existing files.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1070.007',
        method: "Clear Network Connection History and Configurations",
        description: "Clear or remove evidence of malicious network connections to clean up traces of operations.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1070.008',
        method: "Clear Mailbox Data",
        description: "Modify mail and mail application data to remove evidence of adversary activity.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1070.009',
        method: "Clear Persistence",
        description: "Clear artifacts associated with previously established persistence on a host system to remove evidence of activity.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1202',
        method: "Indirect Command Execution",
        description: "Abuse utilities that allow for command execution to bypass security restrictions that limit the use of command-line interpreters.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1036',
        method: "Masquerading",
        description: "Manipulate features of artifacts to make them appear legitimate or benign to users and/or security tools.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1036.001',
        method: "Invalid Code Signature",
        description: "Mimic features of valid code signatures to increase the chance of deceiving users or security tools.",
        baseDifficulty: 18,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1036.002',
        method: "Right-to-Left Override",
        description: "Abuse the right-to-left override (RTLO or RLO) character to disguise a string or file name to make it appear benign.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1036.003',
        method: "Rename System Utilities",
        description: "Rename legitimate system utilities to try to evade security mechanisms concerning the usage of those utilities.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1036.004',
        method: "Masquerade Task or Service",
        description: "Manipulate the name of a task or service to make it appear legitimate or benign.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1036.005',
        method: "Match Legitimate Name or Location",
        description: "Match or approximate the name or location of legitimate files or resources to evade defenses and observation.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1036.006',
        method: "Space after Filename",
        description: "Hide a program's true filetype by changing the extension of a file with an appended space.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1036.007',
        method: "Double File Extension",
        description: "Abuse a double extension in the filename as a means of masquerading the true file type.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1036.008',
        method: "Masquerade File Type",
        description: "Masquerade malicious payloads as legitimate files through changes to the payload's formatting.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1036.009',
        method: "Break Process Trees",
        description: "Attempt to evade process tree-based analysis by modifying executed malware's parent process ID (PPID).",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1556',
        method: "Modify Authentication Process",
        description: "Modify authentication mechanisms and processes to access user credentials or enable otherwise unwarranted access to accounts.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
              {
        id: 'T1556.001',
        method: "Domain Controller Authentication",
        description: "Patch the authentication process on a domain controller to bypass typical authentication mechanisms and enable access to accounts.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1556.002',
        method: "Password Filter DLL",
        description: "Register malicious password filter DLLs into the authentication process to acquire user credentials as they are validated.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1556.003',
        method: "Pluggable Authentication Modules",
        description: "Modify pluggable authentication modules (PAM) to access user credentials or enable unwarranted access to accounts.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1556.004',
        method: "Network Device Authentication",
        description: "Patch system images to hard code a password in the operating system, bypassing native authentication mechanisms.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1556.005',
        method: "Reversible Encryption",
        description: "Abuse Active Directory authentication encryption properties to gain access to credentials on Windows systems.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1556.006',
        method: "Multi-Factor Authentication",
        description: "Disable or modify multi-factor authentication (MFA) mechanisms to enable persistent access to compromised accounts.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1556.007',
        method: "Hybrid Identity",
        description: "Patch, modify, or otherwise backdoor cloud authentication processes tied to on-premises user identities.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1556.008',
        method: "Network Provider DLL",
        description: "Register malicious network provider DLLs to capture cleartext user credentials during the authentication process.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1556.009',
        method: "Conditional Access Policies",
        description: "Disable or modify conditional access policies to enable persistent access to compromised accounts.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1578',
        method: "Modify Cloud Compute Infrastructure",
        description: "Modify a cloud account's compute service infrastructure to evade defenses.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1578.001',
        method: "Create Snapshot",
        description: "Create a snapshot or data backup within a cloud account to bypass restrictions that prevent access to existing compute service infrastructure.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1578.002',
        method: "Create Cloud Instance",
        description: "Create a new instance or virtual machine within the compute service of a cloud account to evade defenses.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1578.003',
        method: "Delete Cloud Instance",
        description: "Delete a cloud instance after performing malicious activities to evade detection and remove evidence of presence.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1578.004',
        method: "Revert Cloud Instance",
        description: "Revert changes made to a cloud instance after performing malicious activities to evade detection and remove evidence.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1578.005',
        method: "Modify Cloud Compute Configurations",
        description: "Modify settings that affect the size, locations, and resources available to cloud compute infrastructure to evade defenses.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1112',
        method: "Modify Registry",
        description: "Interact with the Windows Registry to hide configuration information, remove information as part of cleanup, or assist in persistence.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1601',
        method: "Modify System Image",
        description: "Make changes to the operating system of embedded network devices to weaken defenses and provide new capabilities.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1601.001',
        method: "Patch System Image",
        description: "Modify the operating system of a network device to introduce new capabilities or weaken existing defenses.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1601.002',
        method: "Downgrade System Image",
        description: "Install an older version of the operating system of a network device to weaken security.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1599',
        method: "Network Boundary Bridging",
        description: "Bridge network boundaries by compromising perimeter network devices or internal devices responsible for network segmentation.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1599.001',
        method: "Network Address Translation Traversal",
        description: "Bridge network boundaries by modifying a network device’s Network Address Translation (NAT) configuration.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1027',
        method: "Obfuscated Files or Information",
        description: "Make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1027.001',
        method: "Binary Padding",
        description: "Use binary padding to add junk data and change the on-disk representation of malware.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1027.002',
        method: "Software Packing",
        description: "Perform software packing or virtual machine software protection to conceal code.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1027.003',
        method: "Steganography",
        description: "Use steganography techniques to hide data in digital media such as images, audio tracks, or text files.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1027.004',
        method: "Compile After Delivery",
        description: "Deliver files to victims as uncompiled code to subvert analysis and scrutiny.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1027.005',
        method: "Indicator Removal from Tools",
        description: "Remove indicators from tools if they believe their malicious tool was detected.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1027.006',
        method: "HTML Smuggling",
        description: "Smuggle data and files past content filters by hiding malicious payloads inside of seemingly benign HTML files.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1027.007',
        method: "Dynamic API Resolution",
        description: "Obfuscate then dynamically resolve API functions called by their malware to conceal malicious functionalities.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1027.008',
        method: "Stripped Payloads",
        description: "Make a payload difficult to analyze by removing symbols, strings, and other human-readable information.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1027.009',
        method: "Embedded Payloads",
        description: "Embed payloads within other files to conceal malicious content from defenses.",
        baseDifficulty: 25,  // High difficulty
               successRateModifier: 0.6,
      },
      {
        id: 'T1027.010',
        method: "Command Obfuscation",
        description: "Obfuscate content during command execution to impede detection and analysis.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1027.011',
        method: "Fileless Storage",
        description: "Store data in 'fileless' formats such as the Windows Registry or event logs to conceal malicious activity.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1027.012',
        method: "LNK Icon Smuggling",
        description: "Smuggle commands to download malicious payloads past content filters by hiding them within Windows shortcut files (.LNK).",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1027.013',
        method: "Encrypted/Encoded File",
        description: "Encrypt or encode files to obfuscate strings, bytes, and other specific patterns to impede detection.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1647',
        method: "Plist File Modification",
        description: "Modify property list files (plist files) to enable other malicious activity while evading detection.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1542',
        method: "Pre-OS Boot",
        description: "Abuse Pre-OS Boot mechanisms as a way to establish persistence on a system.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1542.001',
        method: "System Firmware",
        description: "Modify system firmware to persist on systems.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1542.002',
        method: "Component Firmware",
        description: "Modify component firmware to persist on systems.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1542.003',
        method: "Bootkit",
        description: "Use bootkits to persist on systems by residing below the operating system.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1542.004',
        method: "ROMMONkit",
        description: "Abuse the ROM Monitor (ROMMON) by loading an unauthorized firmware with adversary code.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1542.005',
        method: "TFTP Boot",
        description: "Abuse netbooting to load an unauthorized network device operating system from a Trivial File Transfer Protocol (TFTP) server.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1055',
        method: "Process Injection",
        description: "Inject code into processes to evade process-based defenses and possibly elevate privileges.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.001',
        method: "Dynamic-link Library Injection",
        description: "Inject dynamic-link libraries (DLLs) into processes to evade process-based defenses.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.002',
        method: "Portable Executable Injection",
        description: "Inject portable executables (PE) into processes to evade process-based defenses.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.003',
        method: "Thread Execution Hijacking",
        description: "Inject malicious code into hijacked processes to evade process-based defenses.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.004',
        method: "Asynchronous Procedure Call",
        description: "Inject malicious code into processes via the asynchronous procedure call (APC) queue.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.005',
        method: "Thread Local Storage",
        description: "Inject malicious code into processes via thread local storage (TLS) callbacks.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.008',
        method: "Ptrace System Calls",
        description: "Inject malicious code into processes via ptrace (process trace) system calls.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.009',
        method: "Proc Memory",
        description: "Inject malicious code into processes via the /proc filesystem.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.011',
        method: "Extra Window Memory Injection",
        description: "Inject malicious code into process via Extra Window Memory (EWM).",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.012',
        method: "Process Hollowing",
        description: "Inject malicious code into suspended and hollowed processes to evade process-based defenses.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.013',
        method: "Process Doppelgänging",
        description: "Inject malicious code into process via process doppelgänging.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1055.014',
        method: "VDSO Hijacking",
        description: "Inject malicious code into processes via VDSO hijacking.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1055.015',
        method: "ListPlanting",
        description: "Abuse list-view controls to inject malicious code into hijacked processes.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1620',
        method: "Reflective Code Loading",
        description: "Reflectively load code into a process to conceal the execution of malicious payloads.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1207',
        method: "Rogue Domain Controller",
        description: "Register a rogue Domain Controller to enable manipulation of Active Directory data.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1014',
        method: "Rootkit",
        description: "Use rootkits to hide the presence of programs, files, network connections, services, drivers, and other system components.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1553',
        method: "Subvert Trust Controls",
        description: "Undermine security controls that will either warn users of untrusted activity or prevent execution of untrusted programs.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1553.001',
        method: "Gatekeeper Bypass",
        description: "Modify file attributes and subvert Gatekeeper functionality to evade user prompts and execute untrusted programs.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1553.002',
        method: "Code Signing",
        description: "Create, acquire, or steal code signing materials to sign malware or tools.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1553.003',
        method: "SIP and Trust Provider Hijacking",
        description: "Tamper with SIP and trust provider components to mislead the operating system and application control tools when conducting signature validation checks.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
        },
      {
        id: 'T1553.004',
        method: "Install Root Certificate",
        description: "Install a root certificate on a compromised system to avoid warnings when connecting to adversary-controlled web servers.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1553.005',
        method: "Mark-of-the-Web Bypass",
        description: "Abuse specific file formats to subvert Mark-of-the-Web (MOTW) controls to evade restrictions on downloaded files.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1553.006',
        method: "Code Signing Policy Modification",
        description: "Modify code signing policies to enable execution of unsigned or self-signed code.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1218',
        method: "System Binary Proxy Execution",
        description: "Bypass process and/or signature-based defenses by proxying execution of malicious content with signed or otherwise trusted binaries.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.001',
        method: "Compiled HTML File",
        description: "Abuse Compiled HTML files (.chm) to conceal malicious code.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.002',
        method: "Control Panel",
        description: "Abuse control.exe to proxy execution of malicious payloads.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.003',
        method: "CMSTP",
        description: "Abuse CMSTP.exe to proxy execution of malicious code.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.004',
        method: "InstallUtil",
        description: "Abuse InstallUtil.exe to proxy execution of code through a trusted Windows utility.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.005',
        method: "Mshta",
        description: "Abuse mshta.exe to proxy execution of malicious .hta files and Javascript or VBScript.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.007',
        method: "Msiexec",
        description: "Abuse msiexec.exe to proxy execution of malicious payloads.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.008',
        method: "Odbcconf",
        description: "Abuse odbcconf.exe to proxy execution of malicious payloads.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.009',
        method: "Regsvcs/Regasm",
        description: "Abuse Regsvcs and Regasm to proxy execution of code through a trusted Windows utility.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.010',
        method: "Regsvr32",
        description: "Abuse Regsvr32.exe to proxy execution of malicious code.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.011',
        method: "Rundll32",
        description: "Abuse rundll32.exe to proxy execution of malicious code.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.012',
        method: "Verclsid",
        description: "Abuse verclsid.exe to proxy execution of malicious code.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.013',
        method: "Mavinject",
        description: "Abuse mavinject.exe to inject code into external processes as part of Microsoft Application Virtualization (App-V).",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.014',
        method: "MMC",
        description: "Abuse mmc.exe to proxy execution of malicious .msc files.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1218.015',
        method: "Electron Applications",
        description: "Abuse components of the Electron framework to execute malicious code.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1216',
        method: "System Script Proxy Execution",
        description: "Use trusted scripts, often signed with certificates, to proxy the execution of malicious files.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1216.001',
        method: "PubPrn",
        description: "Use PubPrn.vbs to proxy execution of malicious remote files.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1216.002',
        method: "SyncAppvPublishingServer",
        description: "Abuse SyncAppvPublishingServer.vbs to proxy execution of malicious PowerShell commands.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1221',
        method: "Template Injection",
        description: "Create or modify references in user document templates to conceal malicious code or force authentication attempts.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1205',
        method: "Traffic Signaling",
        description: "Use traffic signaling to hide open ports or other malicious functionality used for persistence or command and control.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1205.001',
        method: "Port Knocking",
        description: "Use port knocking to hide open ports used for persistence or command and control.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1205.002',
        method: "Socket Filters",
        description: "Attach filters to a network socket to monitor then activate backdoors used for persistence or command and control.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1127',
        method: "Trusted Developer Utilities Proxy Execution",
        description: "Take advantage of trusted developer utilities to proxy execution of malicious payloads.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1127.001',
        method: "MSBuild",
        description: "Use MSBuild to proxy execution of code through a trusted Windows utility.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1535',
        method: "Unused/Unsupported Cloud Regions",
        description: "Create cloud instances in unused geographic service regions to evade detection.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1550',
        method: "Use Alternate Authentication Material",
        description: "Use alternate authentication material to move laterally within an environment and bypass normal system access controls.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1550.001',
        method: "Application Access Token",
        description: "Use stolen application access tokens to bypass typical authentication processes and access restricted accounts, information, or services.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1550.002',
        method: "Pass the Hash",
        description: "Authenticate using stolen password hashes to move laterally within an environment.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
              {
        id: 'T1550.003',
        method: "Pass the Ticket",
        description: "Authenticate using stolen Kerberos tickets to move laterally within an environment.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1550.004',
        method: "Web Session Cookie",
        description: "Use stolen web session cookies to bypass authentication and impersonate a user.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1550.005',
        method: "SSH Authorized Keys",
        description: "Use stolen or maliciously placed SSH authorized keys to bypass the need for a password and authenticate to an SSH server.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1550.006',
        method: "Cloud Instance Metadata API",
        description: "Use cloud instance metadata APIs to retrieve access tokens and other credentials without user intervention.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1497',
        method: "Virtualization/Sandbox Evasion",
        description: "Employ techniques to detect and avoid virtualization and sandbox environments.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1497.001',
        method: "System Checks",
        description: "Check for certain system properties, such as environment variables or process names, to detect virtualization or sandboxing.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1497.002',
        method: "User Activity-Based Checks",
        description: "Check for user activity or simulate user interaction to detect virtualization or sandboxing.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1497.003',
        method: "Time-Based Evasion",
        description: "Use time delays or checks to avoid detection by sandbox or virtualization environments that execute code in a limited timeframe.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
      {
        id: 'T1497.004',
        method: "Hardware Fingerprinting",
        description: "Fingerprint hardware features such as CPU, BIOS, and memory to detect virtualization or sandboxing.",
        baseDifficulty: 22,  // High difficulty
        successRateModifier: 0.65,
      },
      {
        id: 'T1034',
        method: "Stored Data Manipulation",
        description: "Manipulate stored data to evade detection or impact system operations.",
        baseDifficulty: 25,  // High difficulty
        successRateModifier: 0.6,
      },
      {
        id: 'T1649',
        method: "System Script Proxy Execution",
        description: "Use system scripts such as PowerShell or WMI to execute malicious code through a trusted process.",
        baseDifficulty: 20,  // Medium-High difficulty
        successRateModifier: 0.7,
      },
    ],
  },
{
  id: 8,
  name: "Credential Access",
  description: "Gaining access to credentials is a critical step for adversaries to further their control over systems. Which technique will you use?",
  phase: 'credential-access',
  choices: [
    {
      id: 'T1557',
      method: "Adversary-in-the-Middle",
      description: "Position yourself between networked devices to intercept and manipulate data or credentials.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1557.001',
      method: "LLMNR/NBT-NS Poisoning and SMB Relay",
      description: "Spoof name resolution responses to force communication through your controlled system and capture or relay authentication materials.",
      baseDifficulty: 20,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1557.002',
      method: "ARP Cache Poisoning",
      description: "Poison ARP caches to position yourself between communicating devices, enabling network sniffing or data manipulation.",
      baseDifficulty: 20,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1557.003',
      method: "DHCP Spoofing",
      description: "Spoof DHCP traffic to redirect network communications to your controlled system for credential harvesting.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1110',
      method: "Brute Force",
      description: "Systematically guess or crack passwords to gain unauthorized access.",
      baseDifficulty: 30,  // Very High difficulty
      successRateModifier: 0.5,
    },
    {
      id: 'T1110.001',
      method: "Password Guessing",
      description: "Attempt to guess passwords without prior knowledge, using a list of common passwords.",
      baseDifficulty: 20,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1110.002',
      method: "Password Cracking",
      description: "Crack password hashes obtained from credential dumping or other sources.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1110.003',
      method: "Password Spraying",
      description: "Attempt a small number of common passwords across many accounts to avoid lockouts.",
      baseDifficulty: 20,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1110.004',
      method: "Credential Stuffing",
      description: "Use credentials from breach dumps to gain access through password reuse.",
      baseDifficulty: 20,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1555',
      method: "Credentials from Password Stores",
      description: "Search for and extract credentials from common password storage locations.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1555.001',
      method: "Keychain",
      description: "Acquire credentials from macOS Keychain, which stores user and system passwords.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1555.002',
      method: "Securityd Memory",
      description: "Extract credentials by reading the memory of securityd, the macOS service responsible for encryption and authorization.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1555.003',
      method: "Credentials from Web Browsers",
      description: "Extract credentials saved in web browsers, such as login information for websites.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1555.004',
      method: "Windows Credential Manager",
      description: "Extract credentials from the Windows Credential Manager, which stores authentication data.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1555.005',
      method: "Password Managers",
      description: "Acquire credentials stored in third-party password managers, typically protected by a master password.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1555.006',
      method: "Cloud Secrets Management Stores",
      description: "Extract credentials from cloud-native secret management solutions like AWS Secrets Manager or Azure Key Vault.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1212',
      method: "Exploitation for Credential Access",
      description: "Exploit software vulnerabilities to obtain credentials.",
      baseDifficulty: 30,  // Very High difficulty
      successRateModifier: 0.5,
    },
    {
      id: 'T1187',
      method: "Forced Authentication",
      description: "Force users to automatically provide authentication information through intercepted mechanisms.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1606',
      method: "Forge Web Credentials",
      description: "Forge credential materials like session cookies or tokens to gain access to web applications.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1606.001',
      method: "Web Cookies",
      description: "Forge web cookies to gain access to web applications or services.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1606.002',
      method: "SAML Tokens",
      description: "Forge SAML tokens to impersonate users and gain access across services.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1056',
      method: "Input Capture",
      description: "Capture user input to obtain credentials or information.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1056.001',
      method: "Keylogging",
      description: "Log keystrokes to capture credentials as users type them.",
      baseDifficulty: 20,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1056.002',
      method: "GUI Input Capture",
      description: "Mimic operating system GUI components to capture user input such as credentials.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1056.003',
      method: "Web Portal Capture",
      description: "Install code on externally facing portals to capture and transmit user credentials.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1056.004',
      method: "Credential API Hooking",
      description: "Hook into Windows API functions to collect user credentials as they are processed.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1556',
      method: "Modify Authentication Process",
      description: "Modify authentication mechanisms to access user credentials or enable unwarranted access to accounts.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1556.001',
      method: "Domain Controller Authentication",
      description: "Patch the authentication process on a domain controller to bypass mechanisms and enable access to accounts.",
      baseDifficulty: 30,  // Very High difficulty
      successRateModifier: 0.5,
    },
    {
      id: 'T1556.002',
      method: "Password Filter DLL",
      description: "Register malicious DLLs in the authentication process to acquire user credentials.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1556.003',
      method: "Pluggable Authentication Modules",
      description: "Modify PAM modules to access user credentials or enable unwarranted access to accounts.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1556.004',
      method: "Network Device Authentication",
      description: "Patch system images to bypass native authentication mechanisms on network devices.",
      baseDifficulty: 30,  // Very High difficulty
      successRateModifier: 0.5,
    },
    {
          id: 'T1556.005',
      method: "Reversible Encryption",
      description: "Abuse Active Directory authentication encryption properties to gain access to credentials on Windows systems.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1556.006',
      method: "Multi-Factor Authentication",
      description: "Disable or modify multi-factor authentication mechanisms to gain persistent access to compromised accounts.",
      baseDifficulty: 30,  // Very High difficulty
      successRateModifier: 0.5,
    },
    {
      id: 'T1556.007',
      method: "Hybrid Identity",
      description: "Backdoor cloud authentication processes tied to on-premises identities to bypass authentication mechanisms and access credentials.",
      baseDifficulty: 30,  // Very High difficulty
      successRateModifier: 0.5,
    },
    {
      id: 'T1556.008',
      method: "Network Provider DLL",
      description: "Register malicious network provider DLLs to capture cleartext user credentials during the authentication process.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1556.009',
      method: "Conditional Access Policies",
      description: "Disable or modify conditional access policies to enable persistent access to compromised accounts.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1111',
      method: "Multi-Factor Authentication Interception",
      description: "Intercept multi-factor authentication mechanisms to obtain credentials for accessing systems or resources.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1621',
      method: "Multi-Factor Authentication Request Generation",
      description: "Bypass multi-factor authentication by generating and intercepting MFA requests sent to users.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1040',
      method: "Network Sniffing",
      description: "Passively sniff network traffic to capture information, including authentication material passed over the network.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1003',
      method: "OS Credential Dumping",
      description: "Dump credentials from the operating system to obtain account login and credential material.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1003.001',
      method: "LSASS Memory",
      description: "Access credential material stored in the process memory of the Local Security Authority Subsystem Service (LSASS).",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1003.002',
      method: "Security Account Manager",
      description: "Extract credential material from the Security Account Manager (SAM) database.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1003.003',
      method: "NTDS",
      description: "Access or create a copy of the Active Directory domain database to steal credential information.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1003.004',
      method: "LSA Secrets",
      description: "Access Local Security Authority (LSA) secrets, which can contain credential materials like service account credentials.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1003.005',
      method: "Cached Domain Credentials",
      description: "Access cached domain credentials used for offline authentication in case a domain controller is unavailable.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1003.006',
      method: "DCSync",
      description: "Abuse a Windows Domain Controller's API to simulate the replication process and access credentials.",
      baseDifficulty: 30,  // Very High difficulty
      successRateModifier: 0.5,
    },
    {
      id: 'T1003.007',
      method: "Proc Filesystem",
      description: "Gather credentials from the proc filesystem on Linux-based systems by analyzing virtual memory data.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1003.008',
      method: "/etc/passwd and /etc/shadow",
      description: "Dump the contents of /etc/passwd and /etc/shadow to enable offline password cracking.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1528',
      method: "Steal Application Access Token",
      description: "Steal application access tokens to access remote systems and resources.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1649',
      method: "Steal or Forge Authentication Certificates",
      description: "Steal or forge certificates used for authentication to access remote systems or resources.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1558',
      method: "Steal or Forge Kerberos Tickets",
      description: "Subvert Kerberos authentication by stealing or forging tickets, such as golden or silver tickets.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1558.001',
      method: "Golden Ticket",
      description: "Forge Kerberos ticket-granting tickets (TGT) to generate authentication material for any account in Active Directory.",
      baseDifficulty: 30,  // Very High difficulty
      successRateModifier: 0.5,
    },
    {
      id: 'T1558.002',
      method: "Silver Ticket",
      description: "Forge Kerberos ticket granting service (TGS) tickets to impersonate services within Active Directory.",
      baseDifficulty: 30,  // Very High difficulty
      successRateModifier: 0.5,
    },
    {
      id: 'T1558.003',
      method: "Kerberoasting",
      description: "Abuse a valid Kerberos ticket-granting ticket (TGT) to obtain service tickets that can be cracked offline.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1558.004',
      method: "AS-REP Roasting",
      description: "Reveal credentials by attacking accounts with Kerberos preauthentication disabled.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1539',
      method: "Steal Web Session Cookie",
      description: "Steal web application session cookies to gain access as an authenticated user without needing credentials.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1552',
      method: "Unsecured Credentials",
      description: "Search compromised systems for insecurely stored credentials to obtain access.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1552.001',
      method: "Credentials In Files",
      description: "Search local file systems and remote file shares for files containing insecurely stored credentials.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1552.002',
      method: "Credentials in Registry",
      description: "Search the Windows Registry for insecurely stored credentials.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1552.003',
      method: "Bash History",
      description: "Search the bash command history on Linux systems for insecurely stored credentials.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1552.004',
      method: "Private Keys",
      description: "Search for private key certificate files on compromised systems.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1552.005',
      method: "Cloud Instance Metadata API",
      description: "Access the Cloud Instance Metadata API to collect credentials and other sensitive data.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1552.006',
      method: "Group Policy Preferences",
            description: "Find unsecured credentials in Group Policy Preferences (GPP), which are used to set local accounts and other configurations.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1552.007',
      method: "Container API",
      description: "Gather credentials via APIs within a container environment, such as Docker API and Kubernetes APIs.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1552.008',
      method: "Chat Messages",
      description: "Collect unsecured credentials stored or passed through user communication services such as email, Slack, or Teams.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
  ],
},
{
  id: 9,
  name: "Discovery",
  description: "Adversaries may attempt to gather information about the system and its environment to aid in further actions. Which discovery technique will you use?",
  phase: 'discovery',
  choices: [
    {
      id: 'T1087',
      method: "Account Discovery",
      description: "Adversaries may attempt to get a listing of valid accounts, usernames, or email addresses on a system or within a compromised environment.",
      baseDifficulty: 20,  // High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1087.001',
      method: "Local Account",
      description: "Adversaries may attempt to get a listing of local system accounts to aid in follow-on behavior.",
      baseDifficulty: 18,  // Medium-High difficulty
      successRateModifier: 0.75,
    },
    {
      id: 'T1087.002',
      method: "Domain Account",
      description: "Adversaries may attempt to get a listing of domain accounts to target specific accounts with particular privileges.",
      baseDifficulty: 22,  // High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1087.003',
      method: "Email Account",
      description: "Adversaries may attempt to get a listing of email addresses and accounts by dumping Exchange address lists such as global address lists (GALs).",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1087.004',
      method: "Cloud Account",
      description: "Adversaries may attempt to get a listing of cloud accounts configured by an organization for various uses.",
      baseDifficulty: 23,  // High difficulty
      successRateModifier: 0.68,
    },
    {
      id: 'T1010',
      method: "Application Window Discovery",
      description: "Adversaries may attempt to get a listing of open application windows to identify potential data and security tools.",
      baseDifficulty: 20,  // Medium difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1217',
      method: "Browser Information Discovery",
      description: "Adversaries may enumerate information about browsers to learn more about compromised environments.",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1580',
      method: "Cloud Infrastructure Discovery",
      description: "Adversaries may attempt to discover infrastructure and resources available within an IaaS environment.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1538',
      method: "Cloud Service Dashboard",
      description: "Adversaries may use a cloud service dashboard GUI with stolen credentials to gain useful information from an operational cloud environment.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1526',
      method: "Cloud Service Discovery",
      description: "Adversaries may attempt to enumerate the cloud services running on a system after gaining access.",
      baseDifficulty: 26,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1619',
      method: "Cloud Storage Object Discovery",
      description: "Adversaries may enumerate objects in cloud storage infrastructure to shape follow-on behaviors.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1613',
      method: "Container and Resource Discovery",
      description: "Adversaries may attempt to discover containers and other resources available within a containers environment.",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1622',
      method: "Debugger Evasion",
      description: "Adversaries may employ various means to detect and avoid debuggers.",
      baseDifficulty: 27,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1652',
      method: "Device Driver Discovery",
      description: "Adversaries may attempt to enumerate local device drivers on a victim host.",
      baseDifficulty: 23,  // High difficulty
      successRateModifier: 0.68,
    },
    {
      id: 'T1482',
      method: "Domain Trust Discovery",
      description: "Adversaries may attempt to gather information on domain trust relationships to identify lateral movement opportunities.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1083',
      method: "File and Directory Discovery",
      description: "Adversaries may enumerate files and directories to find specific information within a file system.",
      baseDifficulty: 20,  // Medium difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1615',
      method: "Group Policy Discovery",
      description: "Adversaries may gather information on Group Policy settings to identify paths for privilege escalation.",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1654',
      method: "Log Enumeration",
      description: "Adversaries may enumerate system and service logs to find useful data.",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1046',
      method: "Network Service Discovery",
      description: "Adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1135',
      method: "Network Share Discovery",
      description: "Adversaries may look for folders and drives shared on remote systems to identify potential systems of interest for Lateral Movement.",
      baseDifficulty: 23,  // High difficulty
      successRateModifier: 0.68,
    },
    {
      id: 'T1040',
      method: "Network Sniffing",
      description: "Adversaries may passively sniff network traffic to capture information about an environment.",
      baseDifficulty: 27,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1201',
      method: "Password Policy Discovery",
      description: "Adversaries may attempt to access detailed information about the password policy used within an enterprise network or cloud environment.",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1120',
      method: "Peripheral Device Discovery",
      description: "Adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system.",
      baseDifficulty: 21,  // Medium-High difficulty
      successRateModifier: 0.72,
    },
    {
      id: 'T1069',
      method: "Permission Groups Discovery",
      description: "Adversaries may attempt to discover group and permission settings.",
      baseDifficulty: 23,  // High difficulty
      successRateModifier: 0.68,
    },
    {
      id: 'T1069.001',
      method: "Local Groups",
      description: "Adversaries may attempt to find local system groups and permission settings.",
      baseDifficulty: 20,  // Medium difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1069.002',
      method: "Domain Groups",
      description: "Adversaries may attempt to find domain-level groups and permission settings.",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1069.003',
      method: "Cloud Groups",
      description: "Adversaries may attempt to find cloud groups and permission settings.",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1057',
      method: "Process Discovery",
      description: "Adversaries may attempt to get information about running processes on a system.",
      baseDifficulty: 20,  // Medium difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1012',
      method: "Query Registry",
      description: "Adversaries may interact with the Windows Registry to gather information about the system, configuration, and installed software.",
      baseDifficulty: 19,  // Medium difficulty
      successRateModifier: 0.72,
    },
    {
      id: 'T1018',
      method: "Remote System Discovery",
      description: "Adversaries may attempt to get a listing of other systems by IP address, hostname, or other logical identifier on a network.",
      baseDifficulty: 23,  // High difficulty
      successRateModifier: 0.68,
    },
    {
      id: 'T1518',
      method: "Software Discovery",
      description: "Adversaries may attempt to get a listing of software and software versions that are installed on a system or in a cloud environment.",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1518.001',
      method: "Security Software Discovery",
      description: "Adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment.",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1082',
      method: "System Information Discovery",
      description: "An adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture.",
      baseDifficulty: 20,  // Medium difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1614',
      method: "System Location Discovery",
      description: "Adversaries may gather information in an attempt to calculate the geographical location of a victim host.",
      baseDifficulty: 23,  // High difficulty
      successRateModifier: 0.68,
    },
    {
      id: 'T1614.001',
      method: "System Language Discovery",
      description: "Adversaries may attempt to gather information about the system language of a victim to infer the geographical location of that host.",
      baseDifficulty: 21,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1016',
      method: "System Network Configuration Discovery",
      description: "Adversaries may look for details about the network configuration and settings, such as IP and/or MAC addresses, of systems they access or through information discovery of remote systems.",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1016.001',
      method: "Internet Connection Discovery",
      description: "Adversaries may check for Internet connectivity on compromised systems.",
      baseDifficulty: 20,  // Medium difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1016.002',
      method: "Wi-Fi Discovery",
      description: "Adversaries may search for information about Wi-Fi networks, such as network names and passwords, on compromised systems.",
      baseDifficulty: 21,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1049',
      method: "System Network Connections Discovery",
      description: "Adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1033',
      method: "System Owner/User Discovery",
      description: "Adversaries may attempt to identify the primary user, currently logged-in user, or set of users that commonly use a system.",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1007',
      method: "System Service Discovery",
      description: "Adversaries may try to gather information about registered local system services.",
      baseDifficulty: 21,  // Medium-High difficulty
      successRateModifier: 0.72,
    },
    {
      id: 'T1124',
      method: "System Time Discovery",
      description: "An adversary may gather the system time and/or time zone settings from a local or remote system.",
      baseDifficulty: 19,  // Medium difficulty
      successRateModifier: 0.75,
    },
    {
      id: 'T1497',
      method: "Virtualization/Sandbox Evasion",
      description: "Adversaries may employ various means to detect and avoid virtualization and analysis environments.",
      baseDifficulty: 28,  // Very High difficulty
      successRateModifier: 0.55,
    },
    {
      id: 'T1497.001',
      method: "System Checks",
      description: "Adversaries may employ various system checks to detect and avoid virtualization and analysis environments.",
      baseDifficulty: 26,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1497.002',
      method: "User Activity Based Checks",
      description: "Adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments.",
      baseDifficulty: 27,  // Very High difficulty
      successRateModifier: 0.58,
    },
    {
      id: 'T1497.003',
      method: "Time Based Evasion",
      description: "Adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.65,
    },
  ],
},
{
  id: 10,
  name: "Lateral Movement",
  description: "Adversaries seek to move laterally within the network to expand their control over additional systems. Which lateral movement technique will you employ?",
  phase: 'lateral-movement',
  choices: [
    {
      id: 'T1210',
      method: "Exploitation of Remote Services",
      description: "Adversaries may exploit remote services to gain unauthorized access to internal systems once inside of a network.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1534',
      method: "Internal Spearphishing",
      description: "Adversaries may use internal spearphishing to gain access to additional information or compromise other users within the same organization.",
      baseDifficulty: 23,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1570',
      method: "Lateral Tool Transfer",
      description: "Adversaries may transfer tools or other files between systems in a compromised environment.",
      baseDifficulty: 20,  // Medium difficulty
      successRateModifier: 0.75,
    },
    {
      id: 'T1563',
      method: "Remote Service Session Hijacking",
      description: "Adversaries may take control of preexisting sessions with remote services to move laterally in an environment.",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.68,
    },
    {
      id: 'T1563.001',
      method: "SSH Hijacking",
      description: "Adversaries may hijack a legitimate user's SSH session to move laterally within an environment.",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1563.002',
      method: "RDP Hijacking",
      description: "Adversaries may hijack a legitimate user’s remote desktop session to move laterally within an environment.",
      baseDifficulty: 23,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1021',
      method: "Remote Services",
      description: "Adversaries may use Valid Accounts to log into a service that accepts remote connections, such as telnet, SSH, and VNC.",
      baseDifficulty: 20,  // Medium difficulty
      successRateModifier: 0.75,
    },
    {
      id: 'T1021.001',
      method: "Remote Desktop Protocol",
      description: "Adversaries may use Valid Accounts to log into a computer using the Remote Desktop Protocol (RDP).",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1021.002',
      method: "SMB/Windows Admin Shares",
      description: "Adversaries may use Valid Accounts to interact with a remote network share using Server Message Block (SMB).",
      baseDifficulty: 21,  // Medium-High difficulty
      successRateModifier: 0.72,
    },
    {
      id: 'T1021.003',
      method: "Distributed Component Object Model",
      description: "Adversaries may use Valid Accounts to interact with remote machines by taking advantage of Distributed Component Object Model (DCOM).",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1021.004',
      method: "SSH",
      description: "Adversaries may use Valid Accounts to log into remote machines using Secure Shell (SSH).",
      baseDifficulty: 20,  // Medium difficulty
      successRateModifier: 0.75,
    },
    {
      id: 'T1021.005',
      method: "VNC",
      description: "Adversaries may use Valid Accounts to remotely control machines using Virtual Network Computing (VNC).",
      baseDifficulty: 21,  // Medium-High difficulty
      successRateModifier: 0.72,
    },
    {
      id: 'T1021.006',
      method: "Windows Remote Management",
      description: "Adversaries may use Valid Accounts to interact with remote systems using Windows Remote Management (WinRM).",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1021.007',
      method: "Cloud Services",
      description: "Adversaries may log into accessible cloud services within a compromised environment using Valid Accounts that are synchronized with or federated to on-premises user identities.",
      baseDifficulty: 23,  // Medium-High difficulty
      successRateModifier: 0.68,
    },
    {
      id: 'T1021.008',
      method: "Direct Cloud VM Connections",
      description: "Adversaries may leverage Valid Accounts to log directly into accessible cloud hosted compute infrastructure through cloud native methods.",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1091',
      method: "Replication Through Removable Media",
      description: "Adversaries may move onto systems by copying malware to removable media and taking advantage of Autorun features.",
      baseDifficulty: 21,  // Medium-High difficulty
      successRateModifier: 0.72,
    },
    {
      id: 'T1072',
      method: "Software Deployment Tools",
      description: "Adversaries may gain access to and use centralized software suites to execute commands and move laterally through the network.",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.65,
    },
    {
      id: 'T1080',
      method: "Taint Shared Content",
      description: "Adversaries may deliver payloads to remote systems by adding content to shared storage locations.",
      baseDifficulty: 22,  // Medium-High difficulty
      successRateModifier: 0.7,
    },
    {
      id: 'T1550',
      method: "Use Alternate Authentication Material",
      description: "Adversaries may use alternate authentication material to move laterally within an environment and bypass normal system access controls.",
      baseDifficulty: 26,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1550.001',
      method: "Application Access Token",
      description: "Adversaries may use stolen application access tokens to bypass the typical authentication process and access restricted accounts.",
      baseDifficulty: 25,  // High difficulty
      successRateModifier: 0.62,
    },
    {
      id: 'T1550.002',
      method: "Pass the Hash",
      description: "Adversaries may 'pass the hash' using stolen password hashes to move laterally within an environment.",
      baseDifficulty: 27,  // Very High difficulty
      successRateModifier: 0.58,
    },
    {
      id: 'T1550.003',
      method: "Pass the Ticket",
      description: "Adversaries may 'pass the ticket' using stolen Kerberos tickets to move laterally within an environment.",
      baseDifficulty: 26,  // High difficulty
      successRateModifier: 0.6,
    },
    {
      id: 'T1550.004',
      method: "Web Session Cookie",
      description: "Adversaries can use stolen session cookies to authenticate to web applications and services.",
      baseDifficulty: 24,  // High difficulty
      successRateModifier: 0.65,
    },
  ],
},




          
];

export default scenarios;
