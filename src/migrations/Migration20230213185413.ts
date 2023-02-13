/* eslint-disable */
import { Migration } from '@mikro-orm/migrations';

export class Migration20230213185413 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `event` add index `event_created_date_index`(`created_date`);');
    this.addSql('alter table `event` add index `event_version_index`(`version`);');
    this.addSql('alter table `event` add index `event_aggregate_index`(`aggregate`);');
    this.addSql('alter table `event` add index `event_type_index`(`type`);');
  }

  async down(): Promise<void> {
    this.addSql('alter table `event` drop index `event_created_date_index`;');
    this.addSql('alter table `event` drop index `event_version_index`;');
    this.addSql('alter table `event` drop index `event_aggregate_index`;');
    this.addSql('alter table `event` drop index `event_type_index`;');
  }

}
