



CREATE TABLE "ВидДок"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗагрФайла"
(

	"primaryKey" RAW(16) NOT NULL,

	"ПутьФайла" NVARCHAR2(255) NULL,

	"ЭксФайлы" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Конверт"
(

	"primaryKey" RAW(16) NOT NULL,

	"ИмяДок" NVARCHAR2(255) NULL,

	"ЗагрФайла" RAW(16) NOT NULL,

	"ЭксФайлы" RAW(16) NOT NULL,

	"ВидДок" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЭксФайлы"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Репозиторий" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Размер" NUMBER(10) NULL,

	"Расширение" RAW(16) NOT NULL,

	"ЕдиИзм" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВыгрФайла"
(

	"primaryKey" RAW(16) NOT NULL,

	"ИмяФайла" NVARCHAR2(255) NULL,

	"Конверт" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЕдиИзм"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КонверФайлы"
(

	"primaryKey" RAW(16) NOT NULL,

	"Репозиторий" NVARCHAR2(255) NULL,

	"ВыгрФайла" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Расширение"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ЗагрФайла"
	ADD CONSTRAINT "ЗагрФайла_FЭкс_500" FOREIGN KEY ("ЭксФайлы") REFERENCES "ЭксФайлы" ("primaryKey");

CREATE INDEX "ЗагрФайла_IЭк_8062" on "ЗагрФайла" ("ЭксФайлы");

ALTER TABLE "Конверт"
	ADD CONSTRAINT "Конверт_FЗагр_3377" FOREIGN KEY ("ЗагрФайла") REFERENCES "ЗагрФайла" ("primaryKey");

CREATE INDEX "Конверт_IЗагр_4788" on "Конверт" ("ЗагрФайла");

ALTER TABLE "Конверт"
	ADD CONSTRAINT "Конверт_FЭксФ_5799" FOREIGN KEY ("ЭксФайлы") REFERENCES "ЭксФайлы" ("primaryKey");

CREATE INDEX "Конверт_IЭксФ_3630" on "Конверт" ("ЭксФайлы");

ALTER TABLE "Конверт"
	ADD CONSTRAINT "Конверт_FВидДок_0" FOREIGN KEY ("ВидДок") REFERENCES "ВидДок" ("primaryKey");

CREATE INDEX "Конверт_IВидДок" on "Конверт" ("ВидДок");

ALTER TABLE "ЭксФайлы"
	ADD CONSTRAINT "ЭксФайлы_FРасш_97" FOREIGN KEY ("Расширение") REFERENCES "Расширение" ("primaryKey");

CREATE INDEX "ЭксФайлы_IРас_8619" on "ЭксФайлы" ("Расширение");

ALTER TABLE "ЭксФайлы"
	ADD CONSTRAINT "ЭксФайлы_FЕди_6064" FOREIGN KEY ("ЕдиИзм") REFERENCES "ЕдиИзм" ("primaryKey");

CREATE INDEX "ЭксФайлы_IЕдиИзм" on "ЭксФайлы" ("ЕдиИзм");

ALTER TABLE "ВыгрФайла"
	ADD CONSTRAINT "ВыгрФайла_FКо_7598" FOREIGN KEY ("Конверт") REFERENCES "Конверт" ("primaryKey");

CREATE INDEX "ВыгрФайла_IКо_8444" on "ВыгрФайла" ("Конверт");

ALTER TABLE "КонверФайлы"
	ADD CONSTRAINT "КонверФайлы_F_1731" FOREIGN KEY ("ВыгрФайла") REFERENCES "ВыгрФайла" ("primaryKey");

CREATE INDEX "КонверФайлы_I_5262" on "КонверФайлы" ("ВыгрФайла");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


