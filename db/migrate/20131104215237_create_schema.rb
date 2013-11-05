class CreateSchema < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :duration
      t.boolean :complete
      t.integer :winnerid
      t.timestamps
    end

    create_table :players do |t|
      t.string :name
      t.timestamps
    end

    create_table :attempts do |t|
      t.belongs_to :game
      t.belongs_to :player
      t.timestamps
    end
  end
end
