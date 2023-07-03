-- CreateEnum
CREATE TYPE "UserPermissionRole" AS ENUM ('ADMIN');

-- CreateEnum
CREATE TYPE "CertificateType" AS ENUM ('Associate', 'Recomendation', 'Distinguished', 'OnlinCertificate');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('Website', 'WindowsApplication', 'TestTeam');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Info" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserPermissionRole" NOT NULL DEFAULT 'ADMIN',
    "careerObJ" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "onDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "certiType" "CertificateType" NOT NULL,
    "certiFrom" TEXT,
    "certiMajor" TEXT,
    "certiGPA" TEXT,
    "certiUniv" TEXT,
    "certiGrade" TEXT,
    "certiFromDate" TIMESTAMP(3),
    "certiToDate" TIMESTAMP(3),
    "certiTotalHours" TEXT,
    "InfoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "onDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skil" (
    "id" SERIAL NOT NULL,
    "skil" TEXT NOT NULL,
    "skilType" TEXT NOT NULL,
    "InfoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "onDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Skil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "experName" TEXT NOT NULL,
    "experFromDate" TIMESTAMP(3) NOT NULL,
    "experTodate" TIMESTAMP(3) NOT NULL,
    "experYears" TEXT NOT NULL,
    "InfoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "onDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "projectName" TEXT NOT NULL,
    "projectBeneficiary" TEXT NOT NULL,
    "projectType" "ProjectType" NOT NULL,
    "projectDesc" TEXT NOT NULL,
    "projctSkils" TEXT[],
    "projectMainSections" TEXT[],
    "projectMainSectionDesc" TEXT[],
    "projectLink" TEXT NOT NULL,
    "projectImg" TEXT NOT NULL,
    "InfoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "onDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialMedia" (
    "id" SERIAL NOT NULL,
    "sociName" TEXT NOT NULL,
    "sociLink" TEXT NOT NULL,
    "InfoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "onDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SocialMedia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Info_email_key" ON "Info"("email");

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_InfoId_fkey" FOREIGN KEY ("InfoId") REFERENCES "Info"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skil" ADD CONSTRAINT "Skil_InfoId_fkey" FOREIGN KEY ("InfoId") REFERENCES "Info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_InfoId_fkey" FOREIGN KEY ("InfoId") REFERENCES "Info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_InfoId_fkey" FOREIGN KEY ("InfoId") REFERENCES "Info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMedia" ADD CONSTRAINT "SocialMedia_InfoId_fkey" FOREIGN KEY ("InfoId") REFERENCES "Info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
