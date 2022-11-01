-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "employees" TEXT NOT NULL,
    "EMPLOYEE_ID" TEXT NOT NULL,
    "FIRST_NAME" TEXT NOT NULL,
    "LAST_NAME" TEXT NOT NULL,
    "EMAIL" TEXT NOT NULL,
    "PHONE_NUMBER" TEXT NOT NULL,
    "HIRE_DATE" TIMESTAMP(3) NOT NULL,
    "JOB_ID" TEXT NOT NULL,
    "SALARY" TEXT NOT NULL,
    "COMMISSION_PCT" TEXT NOT NULL,
    "MANAGER_ID" TEXT NOT NULL,
    "DEPARTMENT_ID" TEXT NOT NULL,
    "departments" TEXT NOT NULL,
    "DEPARTMENT_NAME" TEXT NOT NULL,
    "LOCATION_ID" TEXT NOT NULL,
    "locations" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state_province" TEXT NOT NULL,
    "country_id" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductOrder" (
    "id" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "brand" TEXT NOT NULL,

    CONSTRAINT "ProductOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductOrder_id_key" ON "ProductOrder"("id");
