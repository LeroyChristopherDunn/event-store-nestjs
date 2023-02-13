/* eslint-disable */
import { Migration } from '@mikro-orm/migrations';

export class Migration20230213155600 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `event` (`id` int unsigned not null auto_increment primary key, `created_date` datetime not null, `version` int not null, `aggregate` varchar(255) not null, `type` varchar(255) not null, `payload` json not null) default character set utf8mb4 engine = InnoDB;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `event`;');
  }

}
