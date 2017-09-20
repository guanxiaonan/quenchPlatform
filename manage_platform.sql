# ****************************************************
# MySQL Ver 14.14 Distrib 5.7.17
#
# Host: 127.0.0.1
# Database: manage_platform
#
# Time: 2017-5-5
#
# ***************************************************

# Dump of table user
# ------------------------------------------------------------

-- Create syntax for TABLE 'core_account'
DROP TABLE IF EXISTS `core_account`;

CREATE TABLE `core_account` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` varchar(32) NOT NULL UNIQUE COMMENT '用户名',
  `password` varchar(32) NOT NULL COMMENT '密码',
  `salt` varchar(6) NOT NULL COMMENT '随机数',
  `type` tinyint(4) unsigned NOT NULL COMMENT '账户类型(1:个人/高校教师,2:企业,3:政府工作人员)',
  `status` tinyint(4) unsigned NOT NULL COMMENT '状态，0停用，1可用',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='账户';


-- Create syntax for TABLE 'core_individual_info'
DROP TABLE IF EXISTS `core_individual_info`;

CREATE TABLE `core_individual_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `accountID` int(11) unsigned NOT NULL COMMENT '账户ID',
  `realName` varchar(64) DEFAULT NULL COMMENT '真实姓名',
  `gender` tinyint(4) unsigned DEFAULT NULL COMMENT '性别(1:男2:女)',
  `face` varchar(1024) DEFAULT NULL COMMENT '头像路径',
  `politicalStatus` tinyint(4) unsigned DEFAULT NULL COMMENT '政治面貌(1:中共党员,2:中共预备党员,3:共青团员,4:民盟,5:群众)',
  `birthday` date DEFAULT NULL COMMENT '出生日期',
  `phone` varchar(11) NOT NULL COMMENT '工作单位电话',
  `cellphone` varchar(11) NOT NULL COMMENT '手机号码',
  `email` varchar(256) DEFAULT NULL COMMENT '邮箱',
  `education` tinyint(4) unsigned NOT NULL COMMENT '最高学历（1：初中，2：高中，3中专，4大专，5本科，6硕士，7博士）',
  `degree` tinyint(4) unsigned NOT NULL COMMENT '最高学位（1：初中，2：高中，3中专，4大专，5本科，6硕士，7博士）',
  `university` varchar(128) NOT NULL COMMENT '毕业学校',
  `major` varchar(128) NOT NULL COMMENT '所学专业',
  `graduationTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '毕业时间',
  `title` tinyint(4) unsigned NOT NULL COMMENT '最高职称（1:员级,2:助理级,3:中级职称,4:副高级职称,5:高级职称）',
  `areaID` int(11) unsigned DEFAULT NULL COMMENT '工作单位区域ID',
  `workPlaceID` varchar(128) NOT NULL COMMENT '工作单位详细地址',
  `workTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '参加工作时间',
  `addressID` int(11) unsigned DEFAULT NULL COMMENT '家庭住址区域ID',
  `address` varchar(256) DEFAULT NULL COMMENT '家庭详细住址',
  `introduce` varchar(512) DEFAULT NULL COMMENT '个人简介',
  `researchDirections` varchar(256) DEFAULT NULL COMMENT '主要研究方向',
  `createdTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `fk_individual_info_account_id` (`accountID`),
  CONSTRAINT `fk_individual_info_account_id` FOREIGN KEY (`accountID`) REFERENCES `core_account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='个人信息';


-- Create syntax for TABLE 'core_individual_info'
DROP TABLE IF EXISTS `core_individual_achievements`;

CREATE TABLE `core_individual_achievements` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `accountID` int(11) unsigned NOT NULL COMMENT '账户ID',
  ``
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='个人科研成果表';
