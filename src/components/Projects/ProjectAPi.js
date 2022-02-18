export const projectsAPI = [
  {
    title: "PERSONAL PORTFOLIO",
    description:
      "This project was created to demonstrate my skills and to showcase some of important projects that I worked before. This project was created in ReactJs and Bootstrap. I think this is the fundamental project and become one of the learning knowledge once I have decided to learn Web Development by myself.",
    image: "/images/Project/portfolio/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/reactjs.png",
      "/images/AboutMe/SkillSet/javascript.svg",
      "/images/AboutMe/SkillSet/bootstrap.png",
      "/images/AboutMe/SkillSet/HTML5.svg",
      "/images/AboutMe/SkillSet/css3.svg",
    ],
    name: ["React JS", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    source: "https://github.com/phamanhdung1813/anhdungpham-portfolio",
    visit: "https://github.com/phamanhdung1813/anhdungpham-portfolio",
    id: 0,
  },
  {
    title: "SPRING SECURITY JWT TOKEN",
    description:
      "This project was built in Maven and Java 11 JDK. In this project I learned how to create the Back-end token to implement the Authentication and Authorization tasks on the Server, and relational database with MySQL to perform the authority permission. Moreover, some of security technologies to prevent HTTP's penetration like CSRF, Jwt Token, RSA key, ...",
    image: "/images/Project/spring_boot_security_backend/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/java.svg",
      "/images/AboutMe/SkillSet/maven.png",
      "/images/AboutMe/SkillSet/springboot.png",
      "/images/AboutMe/SkillSet/springsecurity.png",
      "/images/AboutMe/SkillSet/mysql.png",
    ],
    source: "https://github.com/phamanhdung1813/spring_boot_security_backend",
    visit: "https://github.com/phamanhdung1813/spring_boot_security_backend",
    id: 1,
  },
  {
    title: "DOCKER JENKINS AUTOMATE MAVEN PROJECT",
    description:
      "This project was built in OpenJDK 8 using Jenkins for Continuous Integration and interact with the Docker Hub automatically. When committing the project into GitHub account, Jenkins will execute the maven building process to update the (.jar) file and push the tag file into Docker Hub account.",
    image: "/images/Project/docker-jenkins-springboot/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/java.svg",
      "/images/AboutMe/SkillSet/git.png",
      "/images/AboutMe/SkillSet/springboot.png",
      "/images/AboutMe/SkillSet/jenkins.svg",
      "/images/AboutMe/SkillSet/docker.svg",
    ],
    source: "https://github.com/phamanhdung1813/docker-jenkins-springboot",
    visit: "https://www.youtube.com/watch?v=lhRTevTtpLs",
    id: 12,
  },
  {
    title: "OAUTH2 SPRING SECURITY",
    description:
      "This project was built in Spring Security OAuth2 with Java 11 JDK. In this project I learned how to use the PKCE code to make the use of OAuth 2.0 Authorization Code, OpenID connection to the server, Token Endpoint certification for JWT Token with asymmetric certification (PFX), and SHA256 encryption key for the Back-End released token.",
    image: "/images/Project/oauth2-spring-security-authserver/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/java.svg",
      "/images/AboutMe/SkillSet/springboot.png",
      "/images/AboutMe/SkillSet/springsecurity.png",
      "/images/AboutMe/SkillSet/openid.png",
      "/images/AboutMe/SkillSet/oauth2.png",
    ],
    source:
      "https://github.com/phamanhdung1813/oauth2-spring-security-authserver",
    visit:
      "https://github.com/phamanhdung1813/oauth2-spring-security-authserver",
    id: 2,
  },
  {
    title: "SPRINGBOOT REACTJS WEBSOCKET",
    description:
      "Websocket is a protocol that supports two-way communication between the client and the server to create a data exchange connection. This project demo shortly real-time chatting conversation by using StompClient and SockJS library, Backend server on this project was build in Java Spring Boot and client side was built on ReactJs.",
    image: "/images/Project/springboot-reactjs-websocket/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/java.svg",
      "/images/AboutMe/SkillSet/reactjs.png",
      "/images/AboutMe/SkillSet/springboot.png",
    ],
    source: "https://github.com/phamanhdung1813/springboot-reactjs-websocket",
    visit: "https://www.youtube.com/watch?v=WiI4SYQ1m2I",
    id: 13,
  },
  {
    title: "HOXTON CLOUD OAUTH2 SERVER",
    description:
      "This project was built in Java 11 JDK by using Spring Boot and Hoxton Cloud. In this project, I learned how to transfer the Security Token between the resource server and authorization server and configure token enhancer, token endpoint. The JWT token build in this project was protected by using the JKS asymmetric key and token parse on resource server by using the public key access.",
    image: "/images/Project/hoxton-oauth2-authserver/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/java.svg",
      "/images/AboutMe/SkillSet/springboot.png",
      "/images/AboutMe/SkillSet/springsecurity.png",
      "/images/AboutMe/SkillSet/openid.png",
      "/images/AboutMe/SkillSet/oauth2.png",
    ],
    source: "https://github.com/phamanhdung1813/hoxton-oauth2-authserver",
    visit: "https://github.com/phamanhdung1813/hoxton-oauth2-authserver",
    id: 3,
  },
  {
    title: "OAUTH2 RESOURCE SERVER",
    description:
      "This project was used the core Back-End security of ''Hoxton Cloud OAuth2 Server project'' before. In this project I learned how to transfer the OAuth2 token between the Authorization Server and Resource Server. Further more, I used JSON array to and JWT decoder to verify the JWT token authorized by authorization server.",
    image: "/images/Project/hoxton-oauth2-resourceserver/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/java.svg",
      "/images/AboutMe/SkillSet/springboot.png",
      "/images/AboutMe/SkillSet/springsecurity.png",
      "/images/AboutMe/SkillSet/mysql.png",
      "/images/AboutMe/SkillSet/oauth2.png",
    ],
    source: "https://github.com/phamanhdung1813/hoxton-oauth2-resourceserver",
    visit: "https://github.com/phamanhdung1813/hoxton-oauth2-resourceserver",
    id: 4,
  },
  {
    title: "SPRING BOOT AWS S3",
    description:
      "This project was built in Maven with Java JDK 11. On this project, I learned how to connect Spring Boot application with Amazon AWS S3 service to store files. This project allow user upload their files into exact S3 bucket profile without login into AWS account. Further more, this project allow user to download and delete files on the bucket by using (aws-java-sdk).",
    image: "/images/Project/springboot-aws-s3/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/aws.png",
      "/images/AboutMe/SkillSet/java.svg",
      "/images/AboutMe/SkillSet/maven.png",
      "/images/AboutMe/SkillSet/springboot.png",
    ],
    source: "https://github.com/phamanhdung1813/springboot-aws-s3",
    visit: "https://github.com/phamanhdung1813/springboot-aws-s3",
    id: 5,
  },
  {
    title: "K8S SPRING BOOT MYSQL",
    description:
    "In this project, I am going to create the connection between docker images for Spring Boot (.jar) and MySQL images by using the Kubernetes with Minikube service.",
    image: "/images/Project/k8s-docker-springboot/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/kubernetes.png",
      "/images/AboutMe/SkillSet/docker.svg",
      "/images/AboutMe/SkillSet/java.svg",
      "/images/AboutMe/SkillSet/springboot.png",
    ],
    source: "https://github.com/phamanhdung1813/k8s-docker-springboot",
    visit: "https://www.youtube.com/watch?v=YYtc5NCL7lk",
    id: 14,
  },
  {
    title: "UI SPRING REACTJS",
    description:
      "This project is the was built in ReactJs, I used the core Back-End security of the project ''Spring Security JWT Token''. In this project, I learned how to use the token released by the server to transfer into the ReactJs storage and configure the proper authorities for the system user to allow access, modify the data.",
    image: "/images/Project/ui-spring-reactjs/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/reactjs.png",
      "/images/AboutMe/SkillSet/javascript.svg",
      "/images/AboutMe/SkillSet/bootstrap.png",
    ],
    source: "https://github.com/phamanhdung1813/ui_spring_reactjs",
    visit: "https://ui-spring-reactjs.herokuapp.com/",
    id: 6,
  },
  {
    title: "AZURE LINUX IPTABLES ANALYSIS",
    description:
      "This project used Azure Cloud with SSH connection between the Window Server VMs. In this project, I learned how to analyze the IP tables security rules on the CentOS platform and implement the Security rule into the Window Server. Moreover, I recorded log TCP packet by using the TCPDUMP to capture and analyze the exact route go through on VM machines.",
    image: "/images/Project/azure_security_iptables_analysis/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/azure.png",
      "/images/AboutMe/SkillSet/iptables.jpg",
      "/images/AboutMe/SkillSet/centos.png",
      "/images/AboutMe/SkillSet/window.svg",
      "/images/AboutMe/SkillSet/ssh.png",
    ],
    source:
      "https://github.com/phamanhdung1813/azure_security_iptables_analysis",
    visit:
      "https://github.com/phamanhdung1813/azure_security_iptables_analysis",
    id: 7,
  },
  {
    title: "MULTIPLE LOGIN ACTIVE DIRECTORY",
    description:
      "This project used CentOS and Window Server Platform. In this project, I learned how to use the OpenLDAP to store the client-server data, and DNS configure on Window server to allow access data by using the Kerberos authentication protocol, and manage the permission by using the Kerberos config and LDIF file.",
    image: "/images/Project/multiple_login_active_directory/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/ldap.svg",
      "/images/AboutMe/SkillSet/kerberos.png",
      "/images/AboutMe/SkillSet/centos.png",
      "/images/AboutMe/SkillSet/window.svg",
    ],
    source:
      "https://github.com/phamanhdung1813/multiple_login_active_directory",
    visit: "https://github.com/phamanhdung1813/multiple_login_active_directory",
    id: 8,
  },
  {
    title: "DATA BACKUP SLAVE SQL",
    description:
      "This project built in CentOS 8 and Window Server platform. In this project, I learned how to configure the slave database by using MariaDB as the admin database and configure the slave SQL backup on Window Server (MySQL 8x) by using the VPN access to facilitate replication and data backups. Moreover, I configured auto service with Bash Scripting with CRONTAB and zip SQL data into (.gz) file. ",
    image: "/images/Project/data_backup_slave_sql/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/mariadb.png",
      "/images/AboutMe/SkillSet/mysql.png",
      "/images/AboutMe/SkillSet/centos.png",
      "/images/AboutMe/SkillSet/window.svg",
      "/images/AboutMe/SkillSet/bash.png",
    ],
    source: "https://github.com/phamanhdung1813/data_backup_slave_sql",
    visit: "https://github.com/phamanhdung1813/data_backup_slave_sql",
    id: 9,
  },
  {
    title: "OPEN VPN TUNNEL",
    description:
      "In this project I used CentOS as the router and connect with Ubuntu as the client. I configred the VPN architect to establish the secure connection to another router present on Azure machine. Moreover, I learned how to used the Web IIS and DNS to establish the route for each IP address and FTP server on Window OS to allow file store and file transfer between machines.",
    image: "/images/Project/open_vpn_and_vpn_tunnel/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/vpn.png",
      "/images/AboutMe/SkillSet/centos.png",
      "/images/AboutMe/SkillSet/window.svg",
      "/images/AboutMe/SkillSet/ubuntu.png",
      "/images/AboutMe/SkillSet/ftp.png",
    ],
    source: "https://github.com/phamanhdung1813/open_vpn_and_vpn_tunnel",
    visit: "https://github.com/phamanhdung1813/open_vpn_and_vpn_tunnel",
    id: 10,
  },
  {
    title: "MAIL SERVER DATABASE ADMIN",
    description:
      "In this project, I used Postfix, Dovecot and MariaDB to perform the project and the SSH connection between these machines. I configured the mail server with database server on CentOS machine, then established the iptables rules to allow connection from Window Server and test mail service with Mozilla Thunderbird. This project is the solution for small business who need the mail server and database server to store data.",
    image: "/images/Project/mail_server_database_admin/avatar.png",
    techs: [
      "/images/AboutMe/SkillSet/mariadb.png",
      "/images/AboutMe/SkillSet/mysql.png",
      "/images/AboutMe/SkillSet/postfix.png",
      "/images/AboutMe/SkillSet/dovecot.png",
      "/images/AboutMe/SkillSet/thunderbird.png",
    ],
    source: "https://github.com/phamanhdung1813/mail_server_database_admin",
    visit: "https://github.com/phamanhdung1813/mail_server_database_admin",
    id: 11,
  },
];
