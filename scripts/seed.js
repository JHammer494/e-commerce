import { db } from 'api/src/lib/db'
import { productCategorySeed } from 'Seeds/product_category_seed'
import { productConfigurationSeed } from 'Seeds/product_configuration_seed'
import { productItemSeed } from 'Seeds/product_item_seed'
import { productSeed } from 'Seeds/product_seed'
import { variationOptionSeed } from 'Seeds/variation_option_seed'
import { variationSeed } from 'Seeds/variation_seed'

export default async () => {
  try {
    await db.product_category.createMany({
      data: productCategorySeed,
      skipDuplicates: true,
    })
    await db.variation.createMany({ data: variationSeed, skipDuplicates: true })
    await db.product.createMany({ data: productSeed, skipDuplicates: true })
    await db.product_item.createMany({
      data: productItemSeed,
      skipDuplicates: true,
    })
    await db.variation_option.createMany({
      data: variationOptionSeed,
      skipDuplicates: true,
    })
    await db.product_configuration.createMany({
      data: productConfigurationSeed,
      skipDuplicates: true,
    })

    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //

  }
  catch (error) {
    console.error(error)
  }



    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
